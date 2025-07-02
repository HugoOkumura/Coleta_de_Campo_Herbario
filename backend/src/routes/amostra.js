import express from 'express'

import {
  criarAmostra,
  listarAmostra,
  obterAmostra,
  atualizarAmostra,
  excluirAmostra
} from '../controllers/amostraController.js'

export const router = express.Router()

// Criar uma amostra
router.post('/', async (req, res) => {
  try {
    const {
      id_planta,
      id_expedicao,
      id_relevo,
      id_solo,
      nm_coletor,
      nr_altitude,
      nr_longitude,
      nr_latitude,
      nr_altura,
      nr_DAP,
      nr_CAP,
      ds_exsudado,
      ds_obscomplement
    } = req.body;

    // Validação básica dos campos obrigatórios
    if (!id_planta || !id_expedicao || !nm_coletor) {
      return res.status(400).json({
        success: false,
        error: 'Campos obrigatórios ausentes.',
        details: null
      });
    }

    const novaAmostra = await criarAmostra({
      id_planta,
      id_expedicao,
      id_relevo,
      id_solo,
      nm_coletor,
      nr_altitude,
      nr_longitude,
      nr_latitude,
      nr_altura,
      nr_DAP,
      nr_CAP,
      ds_exsudado,
      ds_obscomplement
    });

    return res.status(201).json({
      success: true,
      data: novaAmostra,
      message: 'Amostra criada com sucesso'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Erro ao criar a amostra',
      details: error.details || null
    });
  }
});

// Listar todas as amostras
router.get('/', async (req, res) => {
  try {
    const amostras = await listarAmostra();
    return res.status(200).json({
      success: true,
      data: amostras,
      message: 'Amostras listadas com sucesso'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Erro ao listar amostras',
      details: error.details || null
    });
  }
});

// Obter uma amostra por ID
router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        details: null
      });
    }

    const amostra = await obterAmostra(id);
    if (!amostra) {
      return res.status(404).json({
        success: false,
        error: 'Amostra não encontrada',
        details: null
      });
    }

    return res.status(200).json({
      success: true,
      data: amostra,
      message: 'Amostra obtida com sucesso'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Erro ao obter amostra',
      details: error.details || null
    });
  }
});

// Atualizar uma amostra
router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        details: null
      });
    }

    const {
      id_planta,
      id_expedicao,
      id_relevo,
      id_solo,
      nm_coletor,
      nr_altitude,
      nr_longitude,
      nr_latitude,
      nr_altura,
      nr_DAP,
      nr_CAP,
      ds_exsudado,
      ds_obscomplement
    } = req.body;

    if (!id_planta || !id_expedicao || !nm_coletor) {
      return res.status(400).json({
        success: false,
        error: 'Campos obrigatórios ausentes.',
        details: null
      });
    }

    const amostraAtualizada = await atualizarAmostra(id, {
      id_planta,
      id_expedicao,
      id_relevo,
      id_solo,
      nm_coletor,
      nr_altitude,
      nr_longitude,
      nr_latitude,
      nr_altura,
      nr_DAP,
      nr_CAP,
      ds_exsudado,
      ds_obscomplement
    });

    return res.status(200).json({
      success: true,
      data: amostraAtualizada,
      message: 'Amostra atualizada com sucesso!'
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Erro ao atualizar amostra',
      details: error.details || null
    });
  }
});

// Excluir uma amostra
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        details: null
      });
    }

    const excluida = await excluirAmostra(id);
    if (!excluida) {
      return res.status(404).json({
        success: false,
        error: 'Amostra não encontrada',
        details: null
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Amostra excluída com sucesso!',
      data: { id }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Erro ao excluir amostra',
      details: error.details || null
    });
  }
});

export const amostraRoutes = router;
