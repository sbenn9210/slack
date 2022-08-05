import { NextApiRequest, NextApiResponse } from "next";
import {dbConn} from '../../db/index'
import Message from "../../db/models/message.model";
import { findAll } from "../../repositories/message.repository";
export default async function requestHandler(req: NextApiRequest, res: NextApiResponse) {
    dbConn()
    const messages = await findAll()
    res.status(200).json(messages)
}