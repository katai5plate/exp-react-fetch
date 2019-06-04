import express from "express";
import { ErrorCode, errorHandling } from "../errors";

import { Client } from "pg";
import * as PSQL_CONFIG from "../../psql.config";

export default (app: express.Express, uri: string): void => {
  app.get(uri, async (request, response: express.Response) => {
    const userid = Number(request.params.userid);
    if (!Number.isInteger(userid) || userid === 0) {
      errorHandling(response, ErrorCode.INVALID_ID, 500);
      return;
    }

    const client = new Client({ ...PSQL_CONFIG, database: "expReactFetch" });
    client.connect();
    const { rows } = await client.query(`SELECT * FROM users WHERE userid = ${userid};`);
    await client.end();

    if (rows.length === 0) {
      errorHandling(response, ErrorCode.NOT_FOUND, 500);
      return;
    }
    response.json(rows[0])
  })
}
