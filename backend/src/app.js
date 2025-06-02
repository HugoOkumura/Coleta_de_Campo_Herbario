import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index.js'
// import usersRouter from './routes/users.js'
import {expedicaoRoutes} from './routes/expedicao.js'
import { estadosRoutes } from './routes/estado.js'
import {municipiosRoutes} from './routes/municipio.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use('/api/expedicoes', expedicaoRoutes)
app.use('/api/estados', estadosRoutes)
app.use('/api/municipios', municipiosRoutes)

export default app

