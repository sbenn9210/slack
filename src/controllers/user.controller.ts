import { Request, Response } from "express";
import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  interfaces,
} from "inversify-express-utils";
import { SERVICE_KEYS } from "../inversify/keys.constants";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

@controller("/user")
export class UserController
  extends BaseHttpController
  implements interfaces.Controller
{
  public constructor(
    @inject(SERVICE_KEYS.USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {
    super();
  }

  @httpPost("/")
  async create(req: Request, res: Response) {
    const user: any = req.body;
    const newUser = await this.userRepository.create(user);

    res.send(newUser);
  }

  @httpGet("/")
  async findAll(req: Request, res: Response) {
    const users = await this.userRepository.findAll();
    res.send(users);
  }

  @httpGet("/:id")
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await this.userRepository.findOne(id);
    res.send(user);
  }
}
