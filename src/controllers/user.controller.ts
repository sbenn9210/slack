import { Request, Response, Router } from "express";
import User from "../db/models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { asyncHandler } from "./utils";

const userRepository = new UserRepository();

export const create = async (req: Request, res: Response) => {
    const user: any = req.body
    const newUser = await userRepository.create(user)

    res.send(newUser)
}

export const findAll = async (req: Request, res: Response) => {
        const users = await userRepository.findAll()
        res.send(users)
}

export const findOne =async (req:Request, res: Response) => {
     const { id } = req.params;
        const user = await userRepository.findOne(id)
        res.send(user)
}

export const userRouter = Router()
    .get('/', asyncHandler(findAll))
    .get('/:id', asyncHandler(findOne))
    .post('/', asyncHandler(create));