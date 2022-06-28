import { Request, Response, Router } from "express";
import User from "../db/models/user.model";
import { asyncHandler } from "./utils";


export const create = async (req: Request, res: Response) => {
    const user: any = req.body
    const {name, username, email, password} = user;
    const newUser = await User.query().insert({
       name,
       username,
       email,
       password
    })

    res.send(newUser)
}

export const findAll = async (req: Request, res: Response) => {
    const users = await User.query().withGraphFetched('message')
        res.send(users)
}

export const findOne =async (req:Request, res: Response) => {
     const { id } = req.params;
        const user = await User.query().findById(id).withGraphFetched('message')
        res.send(user)
}

export const userRouter = Router()
    .get('/', asyncHandler(findAll))
    .get('/:id', asyncHandler(findOne))
    .post('/', asyncHandler(create));