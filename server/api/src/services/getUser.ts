import express from "express";
import { ErrorCode, errorHandling } from "../errors";
import { sendQueries } from "../db";

export default (app: express.Express, uri: string): void => {
  app.get(uri, async (request, response) => {
    const userid = Number(request.params.userid);
    if (!Number.isInteger(userid) || userid === 0) {
      errorHandling(response, { code: ErrorCode.INVALID_REQUEST });
      return;
    }

    const rows = await sendQueries([
      "SELECT * FROM users",
      `WHERE userid = ${userid};`,
    ]);

    if (rows.length === 0) {
      errorHandling(response, { code: ErrorCode.NOT_FOUND });
      return;
    }
    response.json(rows[0])
  })
}
