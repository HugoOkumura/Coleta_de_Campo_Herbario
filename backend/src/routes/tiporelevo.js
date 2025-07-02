import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
export const router = express.Router()

// Listar todos os tipos de relevo
router.get('/', async (req, res) => {
  try {
    const relevos = await prisma.tipoRelevo.findMany({
      where: {
        id_relevo: {
          not: undefined
        }
      }
    })
    return res.status(200).json(relevos)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: `Erro ao listar tipos de relevo: ${err}` })
  }
})

export const tipoRelevoRoutes = router
