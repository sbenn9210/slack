import { Request, Response, Router } from "express";
import { create, findAll, findMessagesByUser } from "../repositories/message.repository";
import { asyncHandler } from "./utils";

export const createMessage = async (req: Request, res: Response) => {
  const message: any = req.body;
  const newMessage = await create(message);

  res.send(newMessage);
};

export const findAllMessages = async (req: Request, res: Response) => {
  const messages = await findAll();
  res.send(messages);
};

export const getAllMessagesByUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const messages = await findMessagesByUser(id)
  res.send(messages)
}

export const messageRouter = Router()
  .post("/", asyncHandler(createMessage))
  .get("/", asyncHandler(findAllMessages))
  .get('/:id', asyncHandler(getAllMessagesByUser));
