import { Request, Response, Router } from "express";
import { create } from "../repositories/channel.repository";
import { asyncHandler } from "./utils";

export const createChannel = async (req: Request, res: Response) => {
  const newChannel = await create(req.body);

  res.send(newChannel);
};

export const channelRouter = Router().post("/", asyncHandler(createChannel));
