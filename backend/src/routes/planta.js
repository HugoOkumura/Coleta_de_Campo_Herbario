import express from 'express'
import {
  criarPlanta,
  listarPlantas,
  obterPlanta,
  atualizarPlanta,
  excluirPlanta
} from '../controllers/plantaController.js'

export const router = express.Router()

// Create
router.post('/', async (req, res) => {
  try {
    const { nm_vulgar, nm_cientifico, nm_familia } = req.body

    if (!nm_vulgar || !nm_cientifico || !nm_familia) {
      return res.status(400).json({ erro: 'Campos obrigatórios ausentes.' })
    }

    await criarPlanta(req.body)
    res.status(201).json({ mensagem: 'Planta criada com sucesso!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: `Erro ao criar planta: ${err.message}` })
  }
})

// Read
router.get('/', async (req, res) => {
  try {
    const plantas = await listarPlantas()
    res.status(200).json(plantas)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao listar plantas' })
  }
})

// Obter uma planta por ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' })
    }

    const planta = await obterPlanta(id)

    if (!planta) {
      return res.status(404).json({ erro: 'Planta não encontrada' })
    }

    res.status(200).json(planta)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao obter planta' })
  }
})

// Update
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' })
    }

    const { nm_vulgar, nm_cientifico, nm_familia } = req.body
    if (!nm_vulgar || !nm_cientifico || !nm_familia) {
      return res.status(400).json({ erro: 'Campos obrigatórios ausentes.' })
    }

    const atualizada = await atualizarPlanta(id, req.body)
    if (!atualizada) {
      return res.status(404).json({ erro: 'Planta não encontrada' })
    }

    res.status(200).json({ mensagem: 'Planta atualizada com sucesso!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao atualizar planta' })
  }
})

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' })
    }

    const excluida = await excluirPlanta(id)
    if (!excluida) {
      return res.status(404).json({ erro: 'Planta não encontrada' })
    }

    res.status(200).json({ mensagem: 'Planta excluída com sucesso!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao excluir planta' })
  }
})

export const plantaRoutes = router
