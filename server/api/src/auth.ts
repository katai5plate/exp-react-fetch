import { hash, compare } from 'bcrypt';
import { salt } from "../psql.config";
import { sendQueries } from './db';

export const generateHash = async (password: string) => {
  return await hash(password, salt);
}

export const authentication = async (userid: number, password: string) => {
  const { passhash } = (await sendQueries([
    "SELECT passhash FROM users",
    `WHERE userid = ${userid}`,
  ]))[0];
  return await compare(password, passhash);
}