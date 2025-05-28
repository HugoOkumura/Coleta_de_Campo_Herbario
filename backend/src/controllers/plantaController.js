import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const criarPlanta = async (dados) => {
  const { id_planta, nm_vulgar, nm_cientifico, nm_familia } = dados

  return await prisma.planta.create({
    data: {
      id_planta: Number(id_planta),
      nm_vulgar,
      nm_cientifico,
      nm_familia,
    },
  })
}


export const listarPlantas = async () => {
  return await prisma.planta.findMany({
    include: {
      planta_dados: true,
      amostras: true,
    },
  })
}


export const obterPlanta = async (id) => {
  return await prisma.planta.findUnique({
    where: { id_planta: Number(id) },
    include: {
      planta_dados: true,
      amostras: true,
    },
  })
}

export const atualizarPlanta = async (id, dados) => {
  const idNum = Number(id)
  const { nm_vulgar, nm_cientifico, nm_familia } = dados

  const existe = await prisma.planta.findUnique({
    where: { id_planta: idNum },
  })
  if (!existe) throw new Error('Planta não encontrada')

  return await prisma.planta.update({
    where: { id_planta: idNum },
    data: {
      nm_vulgar,
      nm_cientifico,
      nm_familia,
    },
  })
}


export const excluirPlanta = async (id) => {
  const idNum = Number(id)

  const existe = await prisma.planta.findUnique({
    where: { id_planta: idNum },
  })
  if (!existe) throw new Error('Planta não encontrada')

  return await prisma.planta.delete({
    where: { id_planta: idNum },
  })
}
