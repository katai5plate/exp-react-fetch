import express from "express";
import { sendQueries } from "../db";
import { authentication } from "../auth";
import { ErrorCode, errorHandling } from "../errors";
import { validate, IsInt, Min, IsString, MinLength } from "class-validator";

export const getLogs = (app: express.Express, uri: string): void => {
  app.get(uri, async (_, response) => {
    const rows = await sendQueries([
      "SELECT u.username, p.contents FROM posts p",
      "INNER JOIN users u ON p.userid = u.userid",
    ]);
    response.json(rows)
  })
}

class AddMessagePost {
  @IsInt() @Min(1) userid: number = 0;
  @IsString() @MinLength(1) contents: string = "";
  @IsString() password: string = "";
  constructor(init?: Partial<AddMessagePost>) {
    Object.assign(this, init);
  }
}
export const addMessage = (app: express.Express, uri: string): void => {
  app.post(uri, async (request, response) => {
    // Input
    const post = new AddMessagePost(request.body);
    const { userid, contents, password } = post;
    // Validation
    const errors = await validate(post);
    if (errors.length > 0) {
      errorHandling(response, { code: ErrorCode.INVALID_REQUEST, errors });
      return;
    }
    // Authentication
    const accept = await authentication(userid, password);
    if (!accept) {
      errorHandling(response, { code: ErrorCode.AUTH_FAILED, errors });
      return;
    }
    // DB Oparation
    await sendQueries([
      "INSERT INTO posts (userid, contents)",
      `VALUES (${userid}, '${contents}')`,
    ]);
    // Result
    response.json({ res: "ADDED" });
  })
}

class RemoveMessagePost {
  @IsInt() @Min(1) userid: number = 0;
  @IsInt() @Min(1) postid: number = 0;
  @IsString() password: string = "";
  constructor(init?: Partial<AddMessagePost>) {
    Object.assign(this, init);
  }
}
export const removeMessage = (app: express.Express, uri: string): void => {
  app.post(uri, async (request, response) => {
    // Input
    const post = new RemoveMessagePost(request.body);
    const { userid, postid, password } = post;
    // Validation
    const errors = await validate(post);
    if (errors.length > 0) {
      errorHandling(response, { code: ErrorCode.INVALID_REQUEST, errors });
      return;
    }
    // Authentication
    const accept = await authentication(userid, password);
    if (!accept) {
      errorHandling(response, { code: ErrorCode.AUTH_FAILED });
      return;
    }
    // DB Oparation
    await sendQueries([
      "DELETE FROM posts",
      `WHERE userid = ${userid} AND postid = ${postid}`,
    ]);
    // Result
    response.json({ res: "DELETED" });
  })
}