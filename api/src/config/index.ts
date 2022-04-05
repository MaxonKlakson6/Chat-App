import * as dotenv from 'dotenv'

const DEFAULT_PORT = 5000

dotenv.config()

export default {
    express: {
        port: process.env.EXPRESS_PORT || DEFAULT_PORT,
    },
}
