import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

export const router = express.Router()


router.get('/', async (req, res) => {
    try{
        const municipios = await prisma.municipio.findMany({
            where: {
                id_municipio: {
                    not: undefined
                }
            }
        })

        return res.status(200).json(municipios)

    } catch(err){
        console.error(err)
        return res.status(500).json({erro: `Erro ao listar o municipios ${err}`})
    }
})

router.get('/estado', async (req, res) => {
    try{
        const estadoId = req.query.estado
        console.log(req.query.estado)
        const municipios = await prisma.municipio.findMany({
            where:{
                id_estado: estadoId
            },
            select: {
                id_estado: true,
                nm_municipio: true,
                id_municipio: true
            }
        })
        console.log(municipios)
        return res.status(200).json(municipios)
    } catch(err){
        console.error(err)
        return res.status(500).json({erro:`Erro ao listar municipios ${err}`})
    }

})

/**
 * 
 * app.get('/api/municipios', async (req, res) => {
  try {
    // Extrai o parâmetro 'estado' da query string
    const estadoId = Number(req.query.estado);
    
    // Validação básica
    if (!estadoId || isNaN(estadoId)) {
      return res.status(400).json({ error: 'ID do estado é obrigatório e deve ser um número' });
    }

    // Consulta ao banco de dados usando Prisma
    const municipios = await prisma.municipio.findMany({
      where: {
        id_estado: estadoId // Filtra municípios pelo ID do estado
      },
      select: {
        id_municipio: true,
        nome: true
        // Adicione outros campos se necessário
      },
      orderBy: {
        nome: 'asc' // Ordena por nome
      }
    });

    res.json(municipios);
  } catch (error) {
    console.error('Erro ao buscar municípios:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
 * 
 */

export const municipiosRoutes = router