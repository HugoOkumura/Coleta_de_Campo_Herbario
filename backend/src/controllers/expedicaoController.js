// Função para criar uma expedição
export const criarExpedicao = async (dados) => {
    const { dt_expedicao, id_municipio, id_vegetacao } = dados
    const query = `
      INSERT INTO expedicao (dt_expedicao, id_municipio, id_vegetacao)
      VALUES ($1, $2, $3)
    `
    await db.query(query, [dt_expedicao, id_municipio, id_vegetacao])
  }
  
  // Função para listar todas as expedições
  export const listarExpedicoes = async () => {
    const query = 'SELECT * FROM expedicao'
    const res = await db.query(query)
    return res.rows
  }
  
  // Função para obter uma expedição por ID
  export const obterExpedicao = async (id) => {
    const query = 'SELECT * FROM expedicao WHERE id_expedicao = $1'
    const res = await db.query(query, [id])
    return res.rows[0]
  }
  
  // Função para atualizar uma expedição
  export const atualizarExpedicao = async (id, dados) => {
    const { dt_expedicao, id_municipio, id_vegetacao } = dados
    const query = `
      UPDATE expedicao
      SET dt_expedicao = $1, id_municipio = $2, id_vegetacao = $3
      WHERE id_expedicao = $4
    `
    await db.query(query, [dt_expedicao, id_municipio, id_vegetacao, id])
  }
  
  // Função para excluir uma expedição
  export const excluirExpedicao = async (id) => {
    const query = 'DELETE FROM expedicao WHERE id_expedicao = $1'
    await db.query(query, [id])
  }