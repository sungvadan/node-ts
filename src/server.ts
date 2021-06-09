import { Request, Response } from "express"
import express from "express"

export default class Server {
    constructor(readonly port: number) {
    }

    start () {
        const app = express()
        app.get('/', function(req: Request, res: Response) {
            res.send('Salut les gens')
        })
        app.listen(this.port, function() {
            console.log('server start')
        })
    }
}