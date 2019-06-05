import { Response } from "express";

export enum ErrorCode {
  INVALID_ID = "INVALID_ID",
  INVALID_REQUEST = "INVALID_REQUEST",
  INVALID_PASSWORD = "INVALID_PASSWORD",
  NOT_FOUND = "NOT_FOUND",
}
export const errorHandling = (response: Response, code: ErrorCode, status: number = 500) => {
  response.status(status);
  response.send({ error: code });
}