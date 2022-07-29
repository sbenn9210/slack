// https://dev.to/tylerlwsmith/using-a-typescript-interface-to-define-model-properties-in-objection-js-1231
import "reflect-metadata";
import setupDb from "./db/db-setup";
import bodyParser from "body-parser";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./inversify/inversify.config";
import express, { Express } from "express";

const PORT = process.env.PORT;

setupDb();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = new InversifyExpressServer(container, null, { rootPath: "/" });
export const builtServer = server.build();
export const expressServer = builtServer.listen(PORT, () =>
  console.log(`Server is running at localhost:${PORT}`)
);
