import { Response } from "express";
import { ValidationError } from "class-validator";

export enum ErrorCode {
  UNKNOWN = "UNKNOWN",
  INVALID_REQUEST = "INVALID_REQUEST",
  AUTH_FAILED = "AUTH_FAILED",
  NOT_FOUND = "NOT_FOUND",
}
export class ErrorResult {
  code?: ErrorCode = ErrorCode.UNKNOWN;
  errors?: ValidationError[];
  constructor(init?: Partial<ErrorResult>) {
    Object.assign(this, init);
  }
}

export const errorHandling = (response: Response, code: ErrorResult, status: number = 500) => {
  response.status(status);
  response.send({ error: new ErrorResult(code) });
}