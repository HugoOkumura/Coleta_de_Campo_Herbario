import express from 'express'

import {
    criarAmostra,
    listarAmostra,
    obterAmostraExpedicao,
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
                status: 500,
                message: 'Campos obrigatórios ausentes.',
            });
        }
        const novaAmostra = await criarAmostra(req.body);
        // Resposta de sucesso
        return res.status(201).json({
            status: 201,
            novaAmostra: novaAmostra,
            message: 'Amostra criada com sucesso'
        });
    } catch (error) {
        console.error(error);
        // Resposta em caso de erro
        return res.status(500).json({
            status: 500,
            message: error.message || 'Erro ao criar a amostra',
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
            status: 200,
            data: amostras,
            message: 'Amostras listadas com sucesso'
        });
    } catch (error) {
        console.error(error);
        // Resposta em caso de erro
        return res.status(500).json({
            status: 500,
            message: error.message || 'Erro ao listar amostras',
        });
    }
});

// Obter todas as amostras de uma expedição
router.get('/expedicao/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        // Validação do ID
        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                message: 'ID inválido',
            });
        }
        // Busca da amostra
        const amostra = await obterAmostraExpedicao(id);
        // Verificação se a amostra foi encontrada
        if (!amostra) {
            return res.status(404).json({
                status: 404,
                message: 'Amostra não encontrada',
            });
        }
        // Resposta de sucesso
        return res.status(200).json({
            status: 200,
            data: amostra,
            message: 'Amostra obtida com sucesso'
        });

    } catch (error) {
        console.error(error);
        // Resposta em caso de erro interno
        return res.status(500).json({
            status: 500,
            message: error.message || 'Erro ao obter amostra',
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
                status: 400,
                message: 'ID inválido',
            });
        }
        // Busca da amostra
        const amostra = await obterAmostra(id);
        // Verificação se a amostra foi encontrada
        if (!amostra) {
            return res.status(404).json({
                status: 404,
                message: 'Amostra não encontrada',
            });
        }
        // Resposta de sucesso
        return res.status(200).json({
            status: 200,
            data: amostra,
            message: 'Amostra obtida com sucesso'
        });

    } catch (error) {
        console.error(error);
        // Resposta em caso de erro interno
        return res.status(500).json({
            status: 500,
            message: error.message || 'Erro ao obter amostra',
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
                status: 400,
                message: 'ID inválido',              
            });
        }
        // Validação dos campos obrigatórios
        const { id_planta, id_expedicao, nm_coletor } = req.body;
        if (!id_planta || !id_expedicao || !nm_coletor) {
            return res.status(400).json({
                status: 400,
                message: 'Campos obrigatórios ausentes.',
            });
        }
        // Atualização da amostra
        const amostraAtualizada = await atualizarAmostra(id, req.body);
        // Verificação se a amostra foi encontrada
        if (!amostraAtualizada) {
            return res.status(404).json({
                status: 404,
                message: 'Amostra não encontrada',
            });
        }
        // Resposta de sucesso
        return res.status(200).json({
            status: 200,
            data: amostraAtualizada,
            message: 'Amostra atualizada com sucesso!'
        });
    } catch (error) {
        console.error(error);
        // Resposta em caso de erro interno
        return res.status(500).json({
            status: 500,
            message: error.message || 'Erro ao atualizar amostra',
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
        status: 500,
        message: 'ID inválido',
      });
    }
    // Exclusão da amostra
    const excluida = await excluirAmostra(id);
    // Verificação se a amostra foi encontrada e excluída
    if (!excluida) {
      return res.status(404).json({
        status: 500,
        message: 'Amostra não encontrada',
        
      });
    }
    // Resposta de sucesso
    return res.status(200).json({
      status: 200,
      message: 'Amostra excluída com sucesso!',
      data: { id }
    });
  } catch (error) {
    console.error(error);
    // Resposta em caso de erro interno
    return res.status(500).json({
      status: 500,
      message: error.message || 'Erro ao excluir amostra',
    });
  }
});

export const amostraRoutes = router;
