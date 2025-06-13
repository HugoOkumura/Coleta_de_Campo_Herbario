import express from 'express'

import {
    criarAmostra,
    listarAmostra,
    obterAmostra,
    atualizarAmostra,
    excluirAmostra
} from '../controllers/amostraController.js'

export const router = express.Router()

//Criar uma amostra
router.post('/', async (req, res) => {
    try {
        const { id_planta, id_expedicao, nm_coletor } = req.body;
        // Validação dos campos obrigatórios
        if (!id_planta || !id_expedicao || !nm_coletor) {
            return res.status(400).json({
                success: false,
                error: 'Campos obrigatórios ausentes.',
                details: null
            });
        }
        await criarAmostra(req.body);
        // Resposta de sucesso
        return res.status(201).json({
            success: true,
            data: req.body,
            message: 'Amostra criada com sucesso'
        });
    } catch (error) {
        console.error(error);
        // Resposta em caso de erro
        return res.status(500).json({
            success: false,
            error: error.message || 'Erro ao criar a amostra',
            details: error.details || null
        });
    }
});

//Listar uma amostra
router.get('/', async (req, res) => {
    try {
        // Busca todas as amostras
        const amostras = await listarAmostra();
        console.log(amostras);
        // Resposta de sucesso
        return res.status(200).json({
            success: true,
            data: amostras,
            message: 'Amostras listadas com sucesso'
        });
    } catch (error) {
        console.error(error);
        // Resposta em caso de erro
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
        // Validação do ID
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                error: 'ID inválido',
                details: null
            });
        }
        // Busca da amostra
        const amostra = await obterAmostra(id);
        // Verificação se a amostra foi encontrada
        if (!amostra) {
            return res.status(404).json({
                success: false,
                error: 'Amostra não encontrada',
                details: null
            });
        }
        // Resposta de sucesso
        return res.status(200).json({
            success: true,
            data: amostra,
            message: 'Amostra obtida com sucesso'
        });

    } catch (error) {
        console.error(error);
        // Resposta em caso de erro interno
        return res.status(500).json({
            success: false,
            error: error.message || 'Erro ao obter amostra',
            details: error.details || null
        });
    }
});


//Atualizar uma amostra
router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        // Validação do ID
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                error: 'ID inválido',
                details: null
            });
        }
        // Validação dos campos obrigatórios
        const { id_planta, id_expedicao, nm_coletor } = req.body;
        if (!id_planta || !id_expedicao || !nm_coletor) {
            return res.status(400).json({
                success: false,
                error: 'Campos obrigatórios ausentes.',
                details: null
            });
        }
        // Atualização da amostra
        const amostraAtualizada = await atualizarAmostra(id, req.body);
        // Verificação se a amostra foi encontrada
        if (!amostraAtualizada) {
            return res.status(404).json({
                success: false,
                error: 'Amostra não encontrada',
                details: null
            });
        }
        // Resposta de sucesso
        return res.status(200).json({
            success: true,
            data: amostraAtualizada,
            message: 'Amostra atualizada com sucesso!'
        });
    } catch (error) {
        console.error(error);
        // Resposta em caso de erro interno
        return res.status(500).json({
            success: false,
            error: error.message || 'Erro ao atualizar amostra',
            details: error.details || null
        });
    }
});


// Excluir uma Amostra
router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    // Validação do ID
    if (isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: 'ID inválido',
        details: null
      });
    }
    // Exclusão da amostra
    const excluida = await excluirAmostra(id);
    // Verificação se a amostra foi encontrada e excluída
    if (!excluida) {
      return res.status(404).json({
        success: false,
        error: 'Amostra não encontrada',
        details: null
      });
    }
    // Resposta de sucesso
    return res.status(200).json({
      success: true,
      message: 'Amostra excluída com sucesso!',
      data: { id }
    });
  } catch (error) {
    console.error(error);
    // Resposta em caso de erro interno
    return res.status(500).json({
      success: false,
      error: error.message || 'Erro ao excluir amostra',
      details: error.details || null
    });
  }
});

export const amostraRoutes = router;
