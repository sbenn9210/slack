import { Request, Response, Router } from "express";
import { create, findAll, findOne } from "../repositories/user.repository";
import { asyncHandler } from "./utils";

export const createUser = async (req: Request, res: Response) => {
  const user: any = req.body;
  const newUser = await create(user);

  res.send(newUser);
};

export const findAllUsers = async (req: Request, res: Response) => {
  const users = await findAll();
  res.send(users);
};

export const findOneUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await findOne(id);
  res.send(user);
};

export const userRouter = Router()
  .get("/", asyncHandler(findAllUsers))
  .get("/:id", asyncHandler(findOneUser))
  .post("/", asyncHandler(createUser));
