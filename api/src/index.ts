import * as http from 'http'
import * as WebSocket from 'ws'

import app from './app'
import config from './config'

let httpServer: http.Server

;(async () => {
    httpServer = http.createServer(app)

    const wsServer = new WebSocket.Server({ server: httpServer })

    httpServer.listen(config.express.port, () => {
        console.log(
            `Express server (HTTP) listening on port:${config.express.port}`,
        )
    })

    wsServer.on('connection', async (ws: WebSocket) => {
        console.log(`got a websocket connection ${ws}`)
    })
})()
