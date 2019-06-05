import express from "express";
import { sendQueries } from "../db";
import { authentication } from "../auth";
import { ErrorCode, errorHandling } from "../errors";

export const getLogs = (app: express.Express, uri: string): void => {
  app.get(uri, async (_, response) => {
    const rows = await sendQueries([
      "SELECT u.username, p.contents FROM posts p",
      "INNER JOIN users u ON p.userid = u.userid",
    ]);
    response.json(rows)
  })
}

export const addMessage = (app: express.Express, uri: string): void => {
  app.post(uri, async (request, response) => {
    const { userid, contents, password } = request.body;
    if (!userid || !contents || !password) {
      errorHandling(response, ErrorCode.INVALID_REQUEST);
      return;
    }

    const accept = await authentication(userid, password)
    if (!accept) {
      errorHandling(response, ErrorCode.INVALID_PASSWORD);
      return;
    }

    await sendQueries([
      "INSERT INTO posts (userid, contents)",
      `VALUES (${userid}, '${contents}')`,
    ]);
    response.json(request.body)
  })
}

