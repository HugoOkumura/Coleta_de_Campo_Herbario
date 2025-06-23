import express from 'express';
import {
  criarTipoSolo,
  listarTiposSolo,
  obterTipoSolo,
  atualizarTipoSolo,
  excluirTipoSolo,
} from '../controllers/tipoSoloController.js';

export const router = express.Router();
const MAX_LENGTH_NM_SOLO = 40;

// Criar um tipo de solo
router.post('/', async (req, res) => {
  try {
    const { nm_solo } = req.body;
    if (!nm_solo) {
      return res.status(400).json({ erro: 'O campo nm_Solo é obrigatório.' });
    }
    if (nm_solo.length > MAX_LENGTH_NM_SOLO) {
      return res.status(400).json({ erro: `O campo nm_Solo não pode exceder ${MAX_LENGTH_NM_SOLO} caracteres.` });
    }

    const novoTipoSolo = await criarTipoSolo(req.body);
    res.status(201).json({ mensagem: 'Tipo de solo criado com sucesso!',
    tipoSolo: novoTipoSolo });
  } catch (err) {
    console.error(err);

    if (err.message.includes('exceder') || err.message.includes('obrigatório')) {
        return res.status(400).json({ erro: err.message });
    }
    return res.status(500).json({ erro: `Erro ao criar tipo de solo: ${err.message}` });
  }
});

// Listar todos os tipos de solo
router.get('/', async (req, res) => {
  try {
    const tiposSolo = await listarTiposSolo();
    res.status(200).json(tiposSolo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao listar tipos de solo.' });
  }
});

// Obter um tipo de solo por ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10); // Adicionado radix 10
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }

    const tipoSolo = await obterTipoSolo(id);

    if (!tipoSolo) {
      return res.status(404).json({ erro: 'Tipo de solo não encontrado.' });
    }

    res.status(200).json(tipoSolo);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao obter tipo de solo.' });
  }
});

// Atualizar um tipo de solo
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }

    const { nm_solo } = req.body;
    if (!nm_solo) {
      return res.status(400).json({ erro: 'O campo nm_Solo é obrigatório para atualização.' });
    }
    if (nm_solo.length > MAX_LENGTH_NM_SOLO) {
      return res.status(400).json({ erro: `O campo nm_Solo não pode exceder ${MAX_LENGTH_NM_SOLO} caracteres.` });
    }

    const atualizado = await atualizarTipoSolo(id, req.body);
    res.status(200).json({ mensagem: 'Tipo de solo atualizado com sucesso!', tipoSolo: atualizado });
  } catch (err) {
    console.error(err);
    if (err.code === 'P2025') { // Erro do Prisma: "Record to update not found."
        return res.status(404).json({ erro: 'Tipo de solo não encontrado para atualização.' });
    }
   
    if (err.message.includes('exceder') || err.message.includes('obrigatório')) {
        return res.status(400).json({ erro: err.message });
    }
    return res.status(500).json({ erro: `Erro ao atualizar tipo de solo: ${err.message}` });
  }
});

// Excluir solo
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido.' });
    }

    await excluirTipoSolo(id);
    res.status(200).json({ mensagem: 'Tipo de solo excluído com sucesso!' });
  } catch (err) {
    console.error(err);
    if (err.code === 'P2025') { // Erro do Prisma: "Record to delete not found."
        return res.status(404).json({ erro: 'Tipo de solo não encontrado para exclusão.' });
    }
    if (err.code === 'P2003') { // Erro do Prisma: "Foreign key constraint failed"
        return res.status(409).json({ erro: 'Não é possível excluir este tipo de solo pois está associado a uma ou mais amostras.' });
    }
    return res.status(500).json({ erro: `Erro ao excluir tipo de solo: ${err.message}` });
  }
});

export const tipoSoloRoutes = router;