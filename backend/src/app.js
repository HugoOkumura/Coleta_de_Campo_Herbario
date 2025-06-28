import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import indexRouter from './routes/index.js'
// import usersRouter from './routes/users.js'
import {expedicaoRoutes} from './routes/expedicao.js'
import { plantaRoutes } from './routes/planta.js'
import { amostraRoutes } from './routes/amostra.js'
import { estadosRoutes } from './routes/estado.js'
import {municipiosRoutes} from './routes/municipio.js'
//import {vegetacaoRoutes} from './routes/vegetacao.js';

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
app.use('/api/plantas', plantaRoutes)
app.use('/api/amostras', amostraRoutes)
app.use('/api/estados', estadosRoutes)
app.use('/api/municipios', municipiosRoutes)
//app.use('/api/vegetacao', vegetacaoRoutes);


export default app

