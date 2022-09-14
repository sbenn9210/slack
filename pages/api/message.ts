import { NextApiRequest, NextApiResponse } from "next";
import { dbConn } from '../../db/index'
import { create, findAll } from "../../repositories/message.repository";
dbConn();


export default async function requestHandler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;
    switch (method) {
        case 'GET':
            const messages = await findAll()
            res.status(200).json(messages);
            break;
        case 'POST':
            const newMessage = await create(req.body)
            res.status(201).json(newMessage);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
      }
}
