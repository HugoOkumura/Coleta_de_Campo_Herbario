import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.estado.createMany({
    data: [
      { id_estado: 'AC', nm_estado: 'Acre' },
      { id_estado: 'AL', nm_estado: 'Alagoas' },
      { id_estado: 'AP', nm_estado: 'Amapá' },
      { id_estado: 'AM', nm_estado: 'Amazonas' },
      { id_estado: 'BA', nm_estado: 'Bahia' },
      { id_estado: 'CE', nm_estado: 'Ceará' },
      { id_estado: 'DF', nm_estado: 'Distrito Federal' },
      { id_estado: 'ES', nm_estado: 'Espírito Santo' },
      { id_estado: 'GO', nm_estado: 'Goiás' },
      { id_estado: 'MA', nm_estado: 'Maranhão' },
      { id_estado: 'MT', nm_estado: 'Mato Grosso' },
      { id_estado: 'MS', nm_estado: 'Mato Grosso do Sul' },
      { id_estado: 'MG', nm_estado: 'Minas Gerais' },
      { id_estado: 'PA', nm_estado: 'Pará' },
      { id_estado: 'PB', nm_estado: 'Paraíba' },
      { id_estado: 'PR', nm_estado: 'Paraná' },
      { id_estado: 'PE', nm_estado: 'Pernambuco' },
      { id_estado: 'PI', nm_estado: 'Piauí' },
      { id_estado: 'RJ', nm_estado: 'Rio de Janeiro' },
      { id_estado: 'RN', nm_estado: 'Rio Grande do Norte' },
      { id_estado: 'RS', nm_estado: 'Rio Grande do Sul' },
      { id_estado: 'RO', nm_estado: 'Rondônia' },
      { id_estado: 'RR', nm_estado: 'Roraima' },
      { id_estado: 'SC', nm_estado: 'Santa Catarina' },
      { id_estado: 'SP', nm_estado: 'São Paulo' },
      { id_estado: 'SE', nm_estado: 'Sergipe' },
      { id_estado: 'TO', nm_estado: 'Tocantins' },
    ],
    skipDuplicates: true,
  });

  await prisma.dadoEcologico.createMany({
    data: [
      { id_dadoeco: 1, ds_dadoeco: 'Luminosidade' },
      { id_dadoeco: 2, ds_dadoeco: 'Substrato' },
      { id_dadoeco: 3, ds_dadoeco: 'Associações' },
      { id_dadoeco: 4, ds_dadoeco: 'Hábito' },
      { id_dadoeco: 5, ds_dadoeco: 'Tronco' },
      { id_dadoeco: 6, ds_dadoeco: 'Folhas' },
      { id_dadoeco: 7, ds_dadoeco: 'Frutos' },
      { id_dadoeco: 8, ds_dadoeco: 'Flores' },
    ],
    skipDuplicates: true
  });

  await prisma.itemDado.createMany({
    data: [
      { id_dadoeco: 1, id_itemdado: 1, ds_itemdado: 'Heliófita' },
      { id_dadoeco: 1, id_itemdado: 2, ds_itemdado: 'Semi-ciófila' },
      { id_dadoeco: 1, id_itemdado: 3, ds_itemdado: 'Ciófila' },
      { id_dadoeco: 2, id_itemdado: 1, ds_itemdado: 'Rupícola' },
      { id_dadoeco: 2, id_itemdado: 2, ds_itemdado: 'Ripária' },
      { id_dadoeco: 2, id_itemdado: 3, ds_itemdado: 'Palustre' },
      { id_dadoeco: 2, id_itemdado: 4, ds_itemdado: 'Hidrófila' },
      { id_dadoeco: 2, id_itemdado: 5, ds_itemdado: 'Psamófila' },
      { id_dadoeco: 2, id_itemdado: 6, ds_itemdado: 'Reófila' },
      { id_dadoeco: 2, id_itemdado: 7, ds_itemdado: 'Terrícola' },
      { id_dadoeco: 3, id_itemdado: 1, ds_itemdado: 'Epífita' },
      { id_dadoeco: 3, id_itemdado: 2, ds_itemdado: 'Parasita' },
      { id_dadoeco: 3, id_itemdado: 3, ds_itemdado: 'Hemi-parasita' },
      { id_dadoeco: 3, id_itemdado: 4, ds_itemdado: 'Saprófita' },
      { id_dadoeco: 4, id_itemdado: 1, ds_itemdado: 'Árvore' },
      { id_dadoeco: 4, id_itemdado: 2, ds_itemdado: 'Arvoretas' },
      { id_dadoeco: 4, id_itemdado: 3, ds_itemdado: 'Arbusto' },
      { id_dadoeco: 4, id_itemdado: 4, ds_itemdado: 'Subarbusto' },
      { id_dadoeco: 4, id_itemdado: 5, ds_itemdado: 'Erva' },
      { id_dadoeco: 4, id_itemdado: 6, ds_itemdado: 'Ereta' },
      { id_dadoeco: 4, id_itemdado: 7, ds_itemdado: 'Decumbente' },
      { id_dadoeco: 4, id_itemdado: 8, ds_itemdado: 'Escandente' },
      { id_dadoeco: 4, id_itemdado: 9, ds_itemdado: 'Cespitosa' },
      { id_dadoeco: 4, id_itemdado: 10, ds_itemdado: 'Liana' },
      { id_dadoeco: 4, id_itemdado: 11, ds_itemdado: 'Prostrada' },
      { id_dadoeco: 4, id_itemdado: 12, ds_itemdado: 'Repitante' },
      { id_dadoeco: 4, id_itemdado: 13, ds_itemdado: 'Trepadeira com gavinhas' },
      { id_dadoeco: 4, id_itemdado: 14, ds_itemdado: 'Trepadeira volúvel' },
      { id_dadoeco: 5, id_itemdado: 1, ds_itemdado: 'Árvores' },
      { id_dadoeco: 5, id_itemdado: 2, ds_itemdado: 'Arvoretas' },
      { id_dadoeco: 5, id_itemdado: 3, ds_itemdado: 'Arbustos' },
      { id_dadoeco: 5, id_itemdado: 4, ds_itemdado: 'Casca' },
      { id_dadoeco: 5, id_itemdado: 5, ds_itemdado: 'Lisa' },
      { id_dadoeco: 5, id_itemdado: 6, ds_itemdado: 'Escamosa' },
      { id_dadoeco: 5, id_itemdado: 7, ds_itemdado: 'Esfoliante' },
      { id_dadoeco: 5, id_itemdado: 8, ds_itemdado: 'Estriada' },
      { id_dadoeco: 5, id_itemdado: 9, ds_itemdado: 'Fissurada' },
      { id_dadoeco: 5, id_itemdado: 10, ds_itemdado: 'Gretada' },
      { id_dadoeco: 5, id_itemdado: 11, ds_itemdado: 'Suberosa' },
      { id_dadoeco: 5, id_itemdado: 12, ds_itemdado: 'Verrucosa' },
      { id_dadoeco: 6, id_itemdado: 1, ds_itemdado: 'Membranáceas' },
      { id_dadoeco: 6, id_itemdado: 2, ds_itemdado: 'Cartáceas' },
      { id_dadoeco: 6, id_itemdado: 3, ds_itemdado: 'Coriáceas' },
      { id_dadoeco: 6, id_itemdado: 4, ds_itemdado: 'Crassas' },
      { id_dadoeco: 7, id_itemdado: 1, ds_itemdado: 'Carnoso' },
      { id_dadoeco: 7, id_itemdado: 2, ds_itemdado: 'Seco' },
      { id_dadoeco: 7, id_itemdado: 3, ds_itemdado: 'Deiscentes' },
      { id_dadoeco: 7, id_itemdado: 4, ds_itemdado: 'Indeiscentes' },
      { id_dadoeco: 8, id_itemdado: 1, ds_itemdado: 'Cor Cálice' },
      { id_dadoeco: 8, id_itemdado: 2, ds_itemdado: 'Cor Corola' },
    ],
    skipDuplicates: true
  });

  await prisma.tipoRelevo.createMany({
    data: [
      { nm_relevo: 'Planalto' },
      { nm_relevo: 'Planice' },
      { nm_relevo: 'Depressao' },
      { nm_relevo: 'Montanha' }
    ],
    skipDuplicates: true
  });

  console.log('Seed concluído!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
