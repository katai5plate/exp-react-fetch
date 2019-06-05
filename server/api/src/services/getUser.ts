import express from "express";
import { ErrorCode, errorHandling } from "../errors";
import { sendQueries } from "../db";
import { IsInt, Min, validate, IsNumberString, ValidationArguments } from "class-validator";


class GetRequest {
  // FIXME: @NumberString()
  @IsInt() @Min(1) userid: number = -1;
  constructor(init?: Partial<GetRequest>) {
    Object.assign(this, init);
  }
}
export default (app: express.Express, uri: string): void => {
  app.get(uri, async (request, response) => {
    // Input
    const get = new GetRequest({
      // FIXME: pass pure params
      userid: Number(request.params.userid)
    });
    const { userid } = get;
    // Validation
    const errors = await validate(get);
    if (errors.length > 0) {
      errorHandling(response, { code: ErrorCode.INVALID_REQUEST, errors });
      return;
    }
    // DB Oparation
    const rows = await sendQueries([
      "SELECT * FROM users",
      `WHERE userid = ${userid};`,
    ]);
    // Result
    if (rows.length === 0) {
      errorHandling(response, { code: ErrorCode.NOT_FOUND });
      return;
    }
    response.json(rows[0])
  })
}
