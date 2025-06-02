import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const router = express.Router()

router.get('/', async (req, res) => {
    try{
        const estados = await prisma.estado.findMany({
            where:{
                id_estado: {
                    not: undefined
                }
            }
        })
        
        return res.status(200).json(estados)
    } catch(err){
        console.error(err)
        return res.status(500).json({erro: `Erro ao listar estados ${err}`})
    }
})


export const estadosRoutes = router