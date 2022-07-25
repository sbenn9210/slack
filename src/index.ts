// https://dev.to/tylerlwsmith/using-a-typescript-interface-to-define-model-properties-in-objection-js-1231
import setupDb from "./db/db-setup";
import bodyParser from "body-parser";
import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./inversify/inversify.config";

const PORT = process.env.PORT;

setupDb();

const server = new InversifyExpressServer(container, null, { rootPath: "/" });

server.setConfig((app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
});

export const builtServer = server.build();
export const expressServer = builtServer.listen(PORT, () =>
  console.log(`Server is running at localhost:${PORT}`)
);
