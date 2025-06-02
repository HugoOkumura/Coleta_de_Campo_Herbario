// prisma/insert.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criar estado (necessário para criar município)
  const estado = await prisma.estado.upsert({
    where: { id_estado: 'SP' },
    update: {},
    create: {
      id_estado: 'SP',
      nm_estado: 'São Paulo',
    },
  });

  // Criar municípios
  const municipio1 = await prisma.municipio.create({
    data: {
      id_municipio: 1,
      nm_municipio: 'Campinas',
      id_estado: estado.id_estado,
    },
  });

  const municipio2 = await prisma.municipio.create({
    data: {
      id_municipio: 2,
      nm_municipio: 'Ribeirão Preto',
      id_estado: estado.id_estado,
    },
  });

  // Criar tipos de vegetação
  const vegetacao1 = await prisma.tipoVegetacao.create({
    data: {
      id_vegetacao: 1,
      nm_vegetacao: 'Mata Atlântica',
    },
  });

  const vegetacao2 = await prisma.tipoVegetacao.create({
    data: {
      id_vegetacao: 2,
      nm_vegetacao: 'Cerrado',
    },
  });

  console.log('Dados inseridos com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });