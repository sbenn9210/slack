import { Request, Response, Router } from "express";
import { create, findAll } from "../repositories/message.repository";
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

export const messageRouter = Router()
  .post("/", asyncHandler(createMessage))
  .get("/", asyncHandler(findAllMessages));
