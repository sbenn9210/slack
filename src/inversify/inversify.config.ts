import { Container } from "inversify";
import { SERVICE_KEYS } from "./keys.constants";

import "../controllers/user.controller";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { UserRepository } from "../repositories/user.repository";

const _container = new Container();

_container
  .bind<IUserRepository>(SERVICE_KEYS.USER_REPOSITORY)
  .to(UserRepository)
  .inSingletonScope();

const container = _container;
export { container };
