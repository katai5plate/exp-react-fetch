import { Client } from "pg";
import * as PSQL_CONFIG from "../psql.config";

export const sendQueries = async (queries: string[]) => {
  const client = new Client({ ...PSQL_CONFIG, database: "expReactFetch" });
  client.connect();
  const { rows } = await client.query(queries.join(" "));
  await client.end();
  return rows;
}