import express from 'express'
import {
  criarExpedicao,
  listarExpedicoes,
  obterExpedicao,
  atualizarExpedicao,
  excluirExpedicao,
  fecharExpedicao,
  reabrirExpedicao
} from '../controllers/expedicaoController.js'
import moment from 'moment'

export const router = express.Router()

// Criar uma expedição
router.post('/', async (req, res) => {
  try {
    const {id_municipio, ds_titulo,id_vegetacao } = req.body
    if (!id_vegetacao || !id_municipio || !ds_titulo) {
      return res.status(400).json({ mensagem: 'Campos obrigatórios ausentes.' })
    }

    const exp = await criarExpedicao(req.body)
    res.status(201).json({ mensagem: 'Expedição criada com sucesso!', status:201, exp:exp })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ mensagem: `Erro ao criar expedição ${err}` })
  }
})


// Listar todas as expedições
router.get('/', async (req, res) => {
  try {
    const expedicoes = await listarExpedicoes()
    console.log(expedicoes)
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

router.put('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ erro: 'ID inválido' });
    }

    // Verifica se é uma requisição para fechar
    if (req.query.action === 'fechar') {
      const fechada = await fecharExpedicao(id);
      if (!fechada) {
        return res.status(404).json({message:'Expedição não encontrada', status:404});
      }
      return res.status(201).json({
        message:'Expedição fechada com sucesso',
        data: fechada,
        status: 201
      });
    }

    // Verifica se é uma requisição para reabrir
    if (req.query.action === 'reabrir') {
      const aberta = await reabrirExpedicao(id);
      if (!aberta) {
        return res.status(404).json({message:'Expedição não encontrada', status:404});
      }
      return res.status(201).json({
        message:'Expedição reaberta com sucesso',
        data: aberta,
        status: 201
      });
    }
    
    // Caso contrário, atualização normal
    const { dt_expedicao, id_municipio } = req.body;
    if (!dt_expedicao || !id_municipio) {
      return res.status(400).json({ erro: 'Campos obrigatórios ausentes.' });
    }

    const atualizada = await atualizarExpedicao(id, req.body);
    if (!atualizada) {
      return res.status(404).json({ erro: 'Expedição não encontrada' });
    }

    res.status(200).json({ message: 'Expedição atualizada com sucesso!', status:201, exp:atualizada });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ erro: 'Erro ao atualizar expedição' });
  }
});

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

    res.status(200).json({ message: 'Expedição excluída com sucesso!' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ erro: 'Erro ao excluir expedição' })
  }
})

export const expedicaoRoutes = router