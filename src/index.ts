// https://dev.to/tylerlwsmith/using-a-typescript-interface-to-define-model-properties-in-objection-js-1231
import express, { Express, Request, Response } from 'express'


const app: Express = express()
 
app.get('/', (req: Request, res: Response) => {
    res.send('Response from the server')

})

app.listen(8080, () => {
    console.log('Server is running at localhost:8080')
})