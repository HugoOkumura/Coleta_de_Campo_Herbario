import express from 'express';
import {
  criarTipoVegetacao,
  listarTiposVegetacao,
  obterTipoVegetacao,
  atualizarTipoVegetacao,
  excluirTipoVegetacao,
} from '../controllers/tipoVegetacaoController.js';

export const router = express.Router();
const MAX_LENGTH_NM_VEGETACAO = 40;

// Criar um tipo de vegetação
router.post('/', async (req, res) => {
  try {
    const { nm_vegetacao } = req.body;
    if (!nm_vegetacao) {
      return res.status(400).json({ erro: 'O campo nm_vegetacao é obrigatório.' });
    }
    if (nm_vegetacao.length > MAX_LENGTH_NM_VEGETACAO) {
      return res.status(400).json({ erro: `O campo nm_vegetacao não pode exceder ${MAX_LENGTH_NM_VEGETACAO} caracteres.` });
    }

    const novoTipoVegetacao = await criarTipoVegetacao(req.body);
    res.status(201).json({ mensagem: 'Tipo de vegetação criado com sucesso!', data: novoTipoVegetacao });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao criar tipo de vegetação.' });
  }
});

// Listar todos os tipos de vegetação
router.get('/', async (req, res) => {
  try {
    const tiposVegetacao = await listarTiposVegetacao();
    res.status(200).json(tiposVegetacao);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao listar tipos de vegetação.' });
  }
});

// Obter um tipo de vegetação por ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }

    const tipoVegetacao = await obterTipoVegetacao(id);
    if (!tipoVegetacao) {
      return res.status(404).json({ erro: 'Tipo de vegetação não encontrado.' });
    }

    res.status(200).json(tipoVegetacao);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao obter tipo de vegetação.' });
  }
});

// Atualizar um tipo de vegetação
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }

    const { nm_vegetacao } = req.body;
    if (!nm_vegetacao) {
      return res.status(400).json({ erro: 'O campo nm_vegetacao é obrigatório para atualização.' });
    }
    if (nm_vegetacao.length > MAX_LENGTH_NM_VEGETACAO) {
      return res.status(400).json({ erro: `O campo nm_vegetacao não pode exceder ${MAX_LENGTH_NM_VEGETACAO} caracteres.` });
    }

    const atualizado = await atualizarTipoVegetacao(id, req.body);
    if (!atualizado) {
      return res.status(404).json({ erro: 'Tipo de vegetação não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Tipo de vegetação atualizado com sucesso!', data: atualizado });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao atualizar tipo de vegetação.' });
  }
});

// Excluir vegetação
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }

    await excluirTipoVegetacao(id);
    res.status(200).json({ mensagem: 'Tipo de vegetação excluído com sucesso!' });
  } catch (err) {
    console.error(err);
    if (err.code === 'P2025') {
      return res.status(404).json({ erro: 'Tipo de vegetação não encontrado.' });
    }
    if (err.code === 'P2003') {
      return res.status(409).json({ erro: 'Tipo de vegetação está associado a uma ou mais expedições.' });
    }
    return res.status(500).json({ erro: 'Erro ao excluir tipo de vegetação.' });
  }
});

export const tipoVegetacaoRoutes = router;
