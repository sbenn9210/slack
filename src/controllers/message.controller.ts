import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  interfaces,
} from "inversify-express-utils";
import { SERVICE_KEYS } from "../inversify/keys.constants";
import { IMessageRepository } from "../repositories/interfaces/IMessageRepository";
import { Request, Response } from "express";

@controller("/message")
export class MessageController
  extends BaseHttpController
  implements interfaces.Controller
{
  public constructor(
    @inject(SERVICE_KEYS.MESSAGE_REPOSITORY)
    private readonly messageRepository: IMessageRepository
  ) {
    super();
  }

  @httpPost("/")
  async create(req: Request, res: Response) {
    const message: any = req.body;
    console.log(message);
    const newMessage = await this.messageRepository.create(message);

    res.send(newMessage);
  }

  @httpGet("/")
  async findAll(req: Request, res: Response) {
    const messages = await this.messageRepository.findAll();
    res.send(messages);
  }
}
