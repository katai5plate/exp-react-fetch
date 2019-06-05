import { Client } from "pg";
import { user, host, password, port } from "../psql.config";

export const sendQueries = async (queries: string[]) => {
  const client = new Client({
    user, host, password, port,
    database: "expReactFetch",
  });
  client.connect();
  const { rows } = await client.query(
    queries.join(" ").concat(";")
  );
  await client.end();
  return rows;
}