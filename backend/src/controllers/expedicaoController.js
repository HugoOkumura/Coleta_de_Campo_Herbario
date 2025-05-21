import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Criar uma expedição
export const criarExpedicao = async (dados) => {
  const { dt_expedicao, id_municipio, id_vegetacao } = dados
  await prisma.expedicao.create({
    data: {
      dt_expedicao: new Date(dt_expedicao),
      id_municipio: Number(id_municipio),
      id_vegetacao: Number(id_vegetacao)
    }
  })
}

// Listar todas as expedições
export const listarExpedicoes = async () => {
  return await prisma.expedicao.findMany({where:{id_expedicao: {not: undefined}}})
}

// Obter uma expedição por ID
export const obterExpedicao = async (id) => {
  return await prisma.expedicao.findUnique({
    where: {
      id_expedicao: Number(id)
    }
  })
}

// Atualizar uma expedição
export const atualizarExpedicao = async (id, dados) => {
  const idNum = Number(id)

  // Verifica se existe
  const existe = await prisma.expedicao.findUnique({ where: { id_expedicao: idNum } })
  if (!existe) throw new Error('Expedição não encontrada')

  const { dt_expedicao, id_municipio, id_vegetacao } = dados
  await prisma.expedicao.update({
    where: { id_expedicao: idNum },
    data: {
      dt_expedicao: new Date(dt_expedicao),
      id_municipio: Number(id_municipio),
      id_vegetacao: Number(id_vegetacao)
    }
  })
}

// Excluir uma expedição
export const excluirExpedicao = async (id) => {
  const idNum = Number(id)

  // Verifica se existe
  const existe = await prisma.expedicao.findUnique({ where: { id_expedicao: idNum } })
  if (!existe) throw new Error('Expedição não encontrada')

  await prisma.expedicao.delete({
    where: { id_expedicao: idNum }
  })
}
