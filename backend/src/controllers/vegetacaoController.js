import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const MAX_LENGTH_NM_VEGETACAO = 40;

// Criar um tipo de vegetação
export const criarTipoVegetacao = async (dados) => {
  const { nm_vegetacao } = dados;

  if (!nm_vegetacao) {
    throw new Error('O nome (nm_vegetacao) do tipo de vegetação é obrigatório.');
  }
  if (nm_vegetacao.length > MAX_LENGTH_NM_VEGETACAO) {
    throw new Error(`O nome (nm_vegetacao) não pode exceder ${MAX_LENGTH_NM_VEGETACAO} caracteres.`);
  }

  return await prisma.tipoVegetacao.create({
    data: {
      nm_vegetacao,
    },
  });
};

// Listar todos os tipos de vegetação
export const listarTiposVegetacao = async () => {
  return await prisma.tipoVegetacao.findMany({
    orderBy: {
        nm_vegetacao: 'asc', // ordenar por nome
    },
  });
};

// Obter um tipo de vegetação por ID
export const obterTipoVegetacao = async (id) => {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new Error('ID inválido fornecido.');
  }
  return await prisma.tipoVegetacao.findUnique({
    where: { id_vegetacao: idNum },
  });
};

// Atualizar um tipo de vegetação
export const atualizarTipoVegetacao = async (id, dados) => {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new Error('ID inválido fornecido para atualização.');
  }

  const { nm_vegetacao } = dados;
  if (!nm_vegetacao) {
    throw new Error('O nome (nm_vegetacao) é obrigatório para atualização.');
  }
  if (nm_vegetacao.length > MAX_LENGTH_NM_VEGETACAO) {
    throw new Error(`O nome (nm_vegetacao) não pode exceder ${MAX_LENGTH_NM_VEGETACAO} caracteres.`);
  }
  return await prisma.tipoVegetacao.update({
    where: { id_vegetacao: idNum },
    data: {
      nm_vegetacao,
    },
  });
};

// Excluir um tipo de vegetação
export const excluirTipoVegetacao = async (id) => {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new Error('ID inválido fornecido para exclusão.');
  }
  return await prisma.tipoVegetacao.delete({
    where: { id_vegetacao: idNum },
  });
};