import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Criar uma expedição
export const criarExpedicao = async (dados) => {
  const { dt_expedicao, id_municipio, id_vegetacao, midias } = dados

  return await prisma.expedicao.create({
    data: {
      dt_expedicao: new Date(dt_expedicao),
      id_municipio: Number(id_municipio),
      id_vegetacao: id_vegetacao ? Number(id_vegetacao) : null,
      expedicaoMidia: midias && Array.isArray(midias)
        ? {
            create: midias.map((m) => ({
              tp_arquivo: m.tp_arquivo,
              arquivo: Buffer.from(m.arquivo, 'base64'),
              descricao: m.descricao || null,
            })),
          }
        : undefined,
    },
 

// Listar todas as expedições
export const listarExpedicoes = async () => {
  return await prisma.expedicao.findMany({
    include: {
      municipio: true,
      tipoVegetacao: true,
      expedicaoMidia: {
        select: {
          id_expedicaomidia: true,
          tp_arquivo: true,
          descricao: true,
          data_upload: true,
        },
      },
    },
  })

}

// Obter uma expedição por ID
export const obterExpedicao = async (id) => {
  return await prisma.expedicao.findUnique({
    where: { id_expedicao: Number(id) },
    include: {
      municipio: true,
      tipoVegetacao: true,
      expedicaoMidia: {
        select: {
          id_expedicaomidia: true,
          tp_arquivo: true,
          descricao: true,
          data_upload: true,
        },
      },
    },
  })
}

// Atualizar uma expedição
export const atualizarExpedicao = async (id, dados) => {
  const idNum = Number(id)
  const { dt_expedicao, id_municipio, id_vegetacao } = dados

  const existe = await prisma.expedicao.findUnique({
    where: { id_expedicao: idNum },
  })
  if (!existe) throw new Error('Expedição não encontrada')

  return await prisma.expedicao.update({

  // Verifica se existe
  const existe = await prisma.expedicao.findUnique({ where: { id_expedicao: idNum } })
  if (!existe) throw new Error('Expedição não encontrada')

  const { dt_expedicao, id_municipio, id_vegetacao } = dados
  await prisma.expedicao.update({
    where: { id_expedicao: idNum },
    data: {
      dt_expedicao: new Date(dt_expedicao),
      id_municipio: Number(id_municipio),
      id_vegetacao: id_vegetacao ? Number(id_vegetacao) : null,
    },
  })
}

// Excluir uma expedição
export const excluirExpedicao = async (id) => {
  const idNum = Number(id)
  const existe = await prisma.expedicao.findUnique({
    where: { id_expedicao: idNum },
  })
  if (!existe) throw new Error('Expedição não encontrada')

  // Excluir mídias associadas
  await prisma.expedicaoMidia.deleteMany({
    where: { id_expedicao: idNum },
  })

  return await prisma.expedicao.delete({
    where: { id_expedicao: idNum },
  })
}

