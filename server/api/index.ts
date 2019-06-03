import express from "express";
import minimist from "minimist";
import setup from "./setup"
import { wait, getUser } from "./services"

const args = minimist(process.argv);
const app = express();

setup(app, args.p || args.port || 3332);
wait(app, "/wait");
getUser(app, "/user/:userid");