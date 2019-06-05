import express from "express";
import minimist from "minimist";
import setup from "./setup";

import wait from "./services/wait";
import getUser from "./services/getUser";
import { getLogs, addMessage } from "./services/chat";

const args = minimist(process.argv);
const app = express();

setup(app, args.p || args.port || 3332);

wait(app, "/wait");
getUser(app, "/user/:userid");
getLogs(app, "/chat/logs");
addMessage(app, "/chat/add");