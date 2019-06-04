import express from "express";
import * as ERROR from "../errors";

import { Client } from "pg";
import * as PSQL_CONFIG from "../../psql.config";

// const sleepTime = (ms: number) => new Promise(res => setTimeout(res, ms));

// export const wait = (app: express.Express, uri: string): void => {
//   app.get(uri, async (_, response) => {
//     await sleepTime(3000);
//     response.json({ res: "OKEY" })
//   })
// }

export default (app: express.Express, uri: string): void => {
  app.get(uri, async (request, response) => {
    const userid = Number(request.params.userid);
    if (!Number.isInteger(userid) || userid === 0) {
      response.json({ error: ERROR.INVALID_ID })
      return;
    }

    const client = new Client({ ...PSQL_CONFIG, database: "expReactFetch" });
    client.connect();
    const { rows } = await client.query(`SELECT * FROM users WHERE userid = ${userid};`);
    await client.end();

    if (rows.length === 0) {
      response.status(500);
      response.send({ error: ERROR.NOT_FOUND });
      return;
    }
    response.json({ res: rows[0] })
  })
}
