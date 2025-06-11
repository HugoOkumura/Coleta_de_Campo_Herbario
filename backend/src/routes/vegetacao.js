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
      return res.status(400).json({
        success: false,
        error: 'O campo nm_vegetacao é obrigatório.',
        details: null
      });
    }
    if (nm_vegetacao.length > MAX_LENGTH_NM_VEGETACAO) {
      return res.status(400).json({
        success: false,
        error: `O campo nm_vegetacao não pode exceder ${MAX_LENGTH_NM_VEGETACAO} caracteres.`,
        details: null
      });
    }

    const novoTipoVegetacao = await criarTipoVegetacao(req.body);
    res.status(201).json({
      success: true,
      data: novoTipoVegetacao,
      message: 'Tipo de vegetação criado com sucesso!'
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      error: err.message,
      details: err.details || null
    });
  }
});

// Listar todos os tipos de vegetação
router.get('/', async (req, res) => {
  try {
    const tiposVegetacao = await listarTiposVegetacao();
    res.status(200).json({
      success: true,
      data: tiposVegetacao,
      message: 'Lista de tipos de vegetação obtida com sucesso.'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Erro ao listar tipos de vegetação.',
      details: err.details || null
    });
  }
});

// Obter um tipo de vegetação por ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido.',
        details: null
      });
    }

    const tipoVegetacao = await obterTipoVegetacao(id);

    if (!tipoVegetacao) {
      return res.status(404).json({
        success: false,
        error: 'Tipo de vegetação não encontrado.',
        details: null
      });
    }

    res.status(200).json({
      success: true,
      data: tipoVegetacao,
      message: 'Tipo de vegetação obtido com sucesso.'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: 'Erro ao obter tipo de vegetação.',
      details: err.details || null
    });
  }
});

// Atualizar um tipo de vegetação
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido.',
        details: null
      });
    }

    const { nm_vegetacao } = req.body;
    if (!nm_vegetacao) {
      return res.status(400).json({
        success: false,
        error: 'O campo nm_vegetacao é obrigatório para atualização.',
        details: null
      });
    }
    if (nm_vegetacao.length > MAX_LENGTH_NM_VEGETACAO) {
      return res.status(400).json({
        success: false,
        error: `O campo nm_vegetacao não pode exceder ${MAX_LENGTH_NM_VEGETACAO} caracteres.`,
        details: null
      });
    }

    const atualizado = await atualizarTipoVegetacao(id, req.body);
    res.status(200).json({
      success: true,
      data: atualizado,
      message: 'Tipo de vegetação atualizado com sucesso!'
    });
  } catch (err) {
    console.error(err);
    if (err.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Tipo de vegetação não encontrado para atualização.',
        details: null
      });
    }

    res.status(400).json({
      success: false,
      error: err.message,
      details: err.details || null
    });
  }
});

// Excluir vegetação
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido.',
        details: null
      });
    }

    await excluirTipoVegetacao(id);
    res.status(200).json({
      success: true,
      data: null,
      message: 'Tipo de vegetação excluído com sucesso!'
    });
  } catch (err) {
    console.error(err);
    if (err.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: 'Tipo de vegetação não encontrado para exclusão.',
        details: null
      });
    }
    if (err.code === 'P2003') {
      return res.status(409).json({
        success: false,
        error: 'Não é possível excluir este tipo de vegetação pois está associado a uma ou mais expedições.',
        details: null
      });
    }
    res.status(500).json({
      success: false,
      error: `Erro ao excluir tipo de vegetação: ${err.message}`,
      details: err.details || null
    });
  }
});

export const tipoVegetacaoRoutes = router;
