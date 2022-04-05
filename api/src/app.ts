import * as express from 'express'
import * as bodyParser from 'body-parser'

class App {
    public app: express.Application

    constructor() {
        this.app = express()
        this.config()
        this.attachRoutes()
    }

    private config() {
        this.app.use(bodyParser.json())
    }

    private attachRoutes() {
        this.app.get('/', (req, res) => {
            res.send(
                '<h1>Websocket messaging server is running</h1><h2>Use ws protocol</h2>',
            )
        })
    }
}

export default new App().app
