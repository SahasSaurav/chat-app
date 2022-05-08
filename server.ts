import http from 'http'
import express from 'express'
import { Server } from 'socket.io'

import cors from 'cors'
import dontenv from 'dotenv'
import compression from 'compression'

import { connectDB } from './config/dbConnection'
import { corsOptions } from './config/corsOptions'
import { shouldCompress } from './config/compression'

import type { Application, Request, Response } from 'express'

const app:Application = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer)

// initialized the env file
dontenv.config()

// initialized the db
connectDB()

//  middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ limit: '10240kb' }))
app.use(cors(corsOptions))
app.use(compression({ filter: shouldCompress }))

// routes
app.get('/hb', (req:Request, res:Response) => {
  res.send('Sever is running')
})

// socket server
io.on('connection', () => {
  console.log('a user connected')
  // socket.on('join', (data) =>{

  // })
})

const port = process.env.PORT || 5000

httpServer.listen(port, () => {
  console.log(`server started running on ${port}`)
})
