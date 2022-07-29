import { Container } from "inversify";
import { SERVICE_KEYS } from "./keys.constants";

import "../controllers/user.controller";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { UserRepository } from "../repositories/user.repository";
import { IMessageRepository } from "../repositories/interfaces/IMessageRepository";
import { MessageRepository } from "../repositories/message.repository";

const _container = new Container();

_container
  .bind<IUserRepository>(SERVICE_KEYS.USER_REPOSITORY)
  .to(UserRepository)
  .inSingletonScope();
_container
  .bind<IMessageRepository>(SERVICE_KEYS.MESSAGE_REPOSITORY)
  .to(MessageRepository)
  .inSingletonScope();

const container = _container;
export { container };
