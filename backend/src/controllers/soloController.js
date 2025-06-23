import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const MAX_LENGTH_NM_SOLO = 40;

// Criar um tipo de solo
export const criarTipoSolo = async (dados) => {
  const { nm_solo } = dados;

  if (!nm_solo) {
    throw new Error('O nome (nm_solo) do tipo de solo é obrigatório.');
  }
  if (nm_solo.length > MAX_LENGTH_NM_SOLO) {
    throw new Error(`O nome (nm_solo) não pode exceder ${MAX_LENGTH_NM_SOLO} caracteres.`);
  }

  return await prisma.tiposolo.create({
    data: {
      nm_solo,
    },
  });
};

// Listar todos os tipos de solo
export const listarTiposSolo = async () => {
  return await prisma.tipoSolo.findMany({
    orderBy: {
        nm_solo: 'asc', // ordenar por nome
    },
  });
};

// Obter um tipo de solo por ID
export const obterTiposolo = async (id) => {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new Error('ID inválido fornecido.');
  }
  return await prisma.tipoSolo.findUnique({
    where: { id_solo: idNum },
  });
};

// Atualizar um tipo de solo
export const atualizarTipoSolo = async (id, dados) => {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new Error('ID inválido fornecido para atualização.');
  }

  const { nm_solo } = dados;
  if (!nm_solo) {
    throw new Error('O nome (nm_solo) é obrigatório para atualização.');
  }
  if (nm_solo.length > MAX_LENGTH_NM_SOLO) {
    throw new Error(`O nome (nm_solo) não pode exceder ${MAX_LENGTH_NM_SOLO} caracteres.`);
  }
  return await prisma.tipoSolo.update({
    where: { id_solo: idNum },
    data: {
      nm_solo,
    },
  });
};

// Excluir um tipo de solo
export const excluirTipoSolo = async (id) => {
  const idNum = Number(id);
  if (isNaN(idNum)) {
    throw new Error('ID inválido fornecido para exclusão.');
  }
  return await prisma.tipoSolo.delete({
    where: { id_solo: idNum },
  });
};