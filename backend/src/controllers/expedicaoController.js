import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Criar uma expedição
export const criarExpedicao = async (dados) => {
  const { dt_expedicao, id_municipio, id_vegetacao, ds_titulo } = dados

      return await prisma.expedicao.create({
      data: {
        dt_expedicao: dt_expedicao ? new Date(dt_expedicao): new Date(),
        id_municipio: Number(id_municipio),
        id_vegetacao: Number(id_vegetacao),
        in_aberto: true,
        ds_titulo: ds_titulo,
      },
      include: {
        municipio: true,
        tipoVegetacao: true,
      },
    });
}

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
          data_upload: true
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
    where: { id_expedicao: idNum },
    data: {
      dt_expedicao: new Date(dt_expedicao),
      id_municipio: Number(id_municipio),
      id_vegetacao: id_vegetacao ? Number(id_vegetacao) : null,
    },
  })
}

export const fecharExpedicao = async (id) => {
  const idNum = Number(id)
  const existe = await prisma.expedicao.findUnique({
    where: {id_expedicao: idNum}
  })
  if (!existe) throw new Error('Expedição não encontrada')

  return await prisma.expedicao.update({
    where: {
      id_expedicao: idNum,
    },
    data: {
      in_aberto: false
    }
  })
}

export const reabrirExpedicao = async (id) => {
  const idNum = Number(id)
  const existe = await prisma.expedicao.findUnique({
    where: {id_expedicao: idNum}
  })
  if (!existe) throw new Error('Expedição não encontrada')

  return await prisma.expedicao.update({
    where: {
      id_expedicao: idNum,
    },
    data: {
      in_aberto: true
    }
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