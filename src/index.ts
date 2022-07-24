// https://dev.to/tylerlwsmith/using-a-typescript-interface-to-define-model-properties-in-objection-js-1231
import setupDb from "./db/db-setup";
import bodyParser from "body-parser";
// import { userRouter } from "./controllers/user.controller";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./inversify/inversify.config";

setupDb();

const server = new InversifyExpressServer(container, null, { rootPath: "/" });

server.setConfig((app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
});

export const builtServer = server.build();
export const expressServer = builtServer.listen(8082, () =>
  console.log("Server is running at localhost:8082")
);
