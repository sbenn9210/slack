// https://dev.to/tylerlwsmith/using-a-typescript-interface-to-define-model-properties-in-objection-js-1231
import express, { Express } from "express";
import setupDb from "./db/db-setup";
import bodyParser from "body-parser";
import { userRouter } from "./controllers/user.controller";
import { messageRouter } from "./controllers/message.controller";
import { channelRouter } from "./controllers/channel.controller";

setupDb();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/message", messageRouter);
app.use("/channel", channelRouter);

app.listen(8082, () => {
  console.log("Server is running at localhost:8082");
});
