import express from "express";
import { ErrorCode, errorHandling } from "../errors";

// import { Client } from "pg";
// import * as PSQL_CONFIG from "../../psql.config";
import { sendQueries } from "../db";

export default (app: express.Express, uri: string): void => {
  app.get(uri, async (request, response) => {
    const userid = Number(request.params.userid);
    if (!Number.isInteger(userid) || userid === 0) {
      errorHandling(response, ErrorCode.INVALID_ID, 500);
      return;
    }

    const rows = await sendQueries([
      "SELECT * FROM users",
      `WHERE userid = ${userid};`,
    ]);

    if (rows.length === 0) {
      errorHandling(response, ErrorCode.NOT_FOUND, 500);
      return;
    }
    response.json(rows[0])
  })
}
