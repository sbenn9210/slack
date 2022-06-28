// https://dev.to/tylerlwsmith/using-a-typescript-interface-to-define-model-properties-in-objection-js-1231
import express, { Express, Request, Response } from 'express'
import User from './db/models/user.model'
import setupDb from './db/db-setup'
import bodyParser from 'body-parser';
import Message from './db/models/message.model';

setupDb()

const app: Express = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
 
app.get('/', (req: Request, res: Response) => {
    res.send('Response from the server')

})

app.post('/users', async (req: Request, res: Response) => {
    const user: any = req.body
    console.log(user)
    const {name, username, email, password} = user;
    const newUser = await User.query().insert({
       name,
       username,
       email,
       password
    })

    res.send(newUser)
})
app.get('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id)
    const user = await User.query().findById(id).withGraphFetched('message')
    res.send(user)
})

app.listen(8080, () => {
    console.log('Server is running at localhost:8080')
})
