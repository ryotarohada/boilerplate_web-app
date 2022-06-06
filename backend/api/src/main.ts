import { listenOnServer } from './server'
import { config } from 'dotenv'
import { database } from './server/models'

config()
// listenOnServer()

database()
