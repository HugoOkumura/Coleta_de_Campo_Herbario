import { Router } from 'express'
import {
  criarExpedicao,
  listarExpedicoes,
  obterExpedicao,
  atualizarExpedicao,
  excluirExpedicao
} from '../controllers/expedicaoController.js'

const router = Router()

// Criar uma expedição
router.post('/', async (req, res) => {
  try {
    const { dt_expedicao, id_municipio } = req.body

    if (!dt_expedicao || !id_municipio) {
      return res.status(400).json({ erro: 'Campos obrigatórios ausentes.' })
    }

    await criarExpedicao(req.body)
    res.status(201).json({ mensagem: 'Expedição criada com sucesso!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao criar expedição' })
  }
})

// Listar todas as expedições
router.get('/', async (req, res) => {
  try {
    const expedicoes = await listarExpedicoes()
    res.status(200).json(expedicoes)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao listar expedições' })
  }
})

// Obter uma expedição por ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' })
    }

    const expedicao = await obterExpedicao(id)

    if (!expedicao) {
      return res.status(404).json({ erro: 'Expedição não encontrada' })
    }

    res.status(200).json(expedicao)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao obter expedição' })
  }
})

// Atualizar uma expedição
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' })
    }

    const { dt_expedicao, id_municipio } = req.body
    if (!dt_expedicao || !id_municipio) {
      return res.status(400).json({ erro: 'Campos obrigatórios ausentes.' })
    }

    const atualizada = await atualizarExpedicao(id, req.body)
    if (!atualizada) {
      return res.status(404).json({ erro: 'Expedição não encontrada' })
    }

    res.status(200).json({ mensagem: 'Expedição atualizada com sucesso!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao atualizar expedição' })
  }
})

// Excluir uma expedição
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' })
    }

    const excluida = await excluirExpedicao(id)
    if (!excluida) {
      return res.status(404).json({ erro: 'Expedição não encontrada' })
    }

    res.status(200).json({ mensagem: 'Expedição excluída com sucesso!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao excluir expedição' })
  }
})
