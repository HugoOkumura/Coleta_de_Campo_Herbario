-- CreateTable
CREATE TABLE "Estado" (
    "id_estado" CHAR(2) NOT NULL,
    "nm_estado" VARCHAR(40) NOT NULL,

    CONSTRAINT "Estado_pkey" PRIMARY KEY ("id_estado")
);

-- CreateTable
CREATE TABLE "Municipio" (
    "id_municipio" INTEGER NOT NULL,
    "nm_municipio" VARCHAR(40) NOT NULL,
    "id_estado" CHAR(2) NOT NULL,

    CONSTRAINT "Municipio_pkey" PRIMARY KEY ("id_municipio")
);

-- CreateTable
CREATE TABLE "TipoVegetacao" (
    "id_vegetacao" INTEGER NOT NULL,
    "nm_vegetacao" VARCHAR(40) NOT NULL,

    CONSTRAINT "TipoVegetacao_pkey" PRIMARY KEY ("id_vegetacao")
);

-- CreateTable
CREATE TABLE "TipoRelevo" (
    "id_relevo" INTEGER NOT NULL,
    "nm_relevo" VARCHAR(40) NOT NULL,

    CONSTRAINT "TipoRelevo_pkey" PRIMARY KEY ("id_relevo")
);

-- CreateTable
CREATE TABLE "TipoSolo" (
    "id_solo" INTEGER NOT NULL,
    "nm_solo" VARCHAR(40) NOT NULL,

    CONSTRAINT "TipoSolo_pkey" PRIMARY KEY ("id_solo")
);

-- CreateTable
CREATE TABLE "Expedicao" (
    "id_expedicao" INTEGER NOT NULL,
    "dt_expedicao" DATE NOT NULL,
    "id_municipio" INTEGER NOT NULL,
    "id_vegetacao" INTEGER,

    CONSTRAINT "Expedicao_pkey" PRIMARY KEY ("id_expedicao")
);

-- CreateTable
CREATE TABLE "ExpedicaoMidia" (
    "id_expedicaomidia" INTEGER NOT NULL,
    "id_expedicao" INTEGER,
    "tp_arquivo" VARCHAR(50) NOT NULL,
    "arquivo" BYTEA NOT NULL,
    "descricao" TEXT,
    "data_upload" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ExpedicaoMidia_pkey" PRIMARY KEY ("id_expedicaomidia")
);

-- CreateTable
CREATE TABLE "DadoEcologico" (
    "id_dadoeco" INTEGER NOT NULL,
    "ds_dadoeco" VARCHAR(50) NOT NULL,

    CONSTRAINT "DadoEcologico_pkey" PRIMARY KEY ("id_dadoeco")
);

-- CreateTable
CREATE TABLE "ItemDado" (
    "id_dadoeco" INTEGER NOT NULL,
    "id_itemdado" INTEGER NOT NULL,
    "ds_itemdado" VARCHAR(50) NOT NULL,

    CONSTRAINT "ItemDado_pkey" PRIMARY KEY ("id_dadoeco","id_itemdado")
);

-- CreateTable
CREATE TABLE "Planta" (
    "id_planta" INTEGER NOT NULL,
    "nm_vulgar" VARCHAR(255) NOT NULL,
    "nm_cientifico" VARCHAR(255) NOT NULL,
    "nm_familia" VARCHAR(100) NOT NULL,

    CONSTRAINT "Planta_pkey" PRIMARY KEY ("id_planta")
);

-- CreateTable
CREATE TABLE "PlantaDado" (
    "id_planta" INTEGER NOT NULL,
    "id_dadoeco" INTEGER NOT NULL,
    "id_itemdado" INTEGER NOT NULL,
    "ds_obs" VARCHAR(255),

    CONSTRAINT "PlantaDado_pkey" PRIMARY KEY ("id_planta","id_dadoeco","id_itemdado")
);

-- CreateTable
CREATE TABLE "Amostra" (
    "id_amostra" INTEGER NOT NULL,
    "id_planta" INTEGER,
    "id_expedicao" INTEGER,
    "id_relevo" INTEGER,
    "id_solo" INTEGER,
    "nm_coletor" VARCHAR(160) NOT NULL,
    "nr_altitude" DECIMAL(65,30),
    "nr_longitude" DECIMAL(65,30),
    "nr_latitude" DECIMAL(65,30),
    "nr_altura" DECIMAL(65,30),
    "nr_DAP" DECIMAL(65,30),
    "nr_CAP" DECIMAL(65,30),
    "ds_exsudado" VARCHAR(100),
    "ds_obscomplement" VARCHAR(400),

    CONSTRAINT "Amostra_pkey" PRIMARY KEY ("id_amostra")
);

-- CreateTable
CREATE TABLE "AmostraDado" (
    "id_amostra" INTEGER NOT NULL,
    "id_dadoeco" INTEGER NOT NULL,
    "id_itemdado" INTEGER NOT NULL,
    "ds_cor" VARCHAR(255),
    "ds_obs" VARCHAR(255),

    CONSTRAINT "AmostraDado_pkey" PRIMARY KEY ("id_amostra","id_dadoeco","id_itemdado")
);

-- CreateTable
CREATE TABLE "AmostraMidia" (
    "id_amostramidia" INTEGER NOT NULL,
    "id_amostra" INTEGER,
    "tp_arquivo" VARCHAR(50) NOT NULL,
    "arquivo" BYTEA NOT NULL,
    "descricao" TEXT,
    "data_upload" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AmostraMidia_pkey" PRIMARY KEY ("id_amostramidia")
);

-- AddForeignKey
ALTER TABLE "Municipio" ADD CONSTRAINT "Municipio_id_estado_fkey" FOREIGN KEY ("id_estado") REFERENCES "Estado"("id_estado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expedicao" ADD CONSTRAINT "Expedicao_id_municipio_fkey" FOREIGN KEY ("id_municipio") REFERENCES "Municipio"("id_municipio") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expedicao" ADD CONSTRAINT "Expedicao_id_vegetacao_fkey" FOREIGN KEY ("id_vegetacao") REFERENCES "TipoVegetacao"("id_vegetacao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpedicaoMidia" ADD CONSTRAINT "ExpedicaoMidia_id_expedicao_fkey" FOREIGN KEY ("id_expedicao") REFERENCES "Expedicao"("id_expedicao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemDado" ADD CONSTRAINT "ItemDado_id_dadoeco_fkey" FOREIGN KEY ("id_dadoeco") REFERENCES "DadoEcologico"("id_dadoeco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantaDado" ADD CONSTRAINT "PlantaDado_id_planta_fkey" FOREIGN KEY ("id_planta") REFERENCES "Planta"("id_planta") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantaDado" ADD CONSTRAINT "PlantaDado_id_dadoeco_id_itemdado_fkey" FOREIGN KEY ("id_dadoeco", "id_itemdado") REFERENCES "ItemDado"("id_dadoeco", "id_itemdado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlantaDado" ADD CONSTRAINT "PlantaDado_id_dadoeco_fkey" FOREIGN KEY ("id_dadoeco") REFERENCES "DadoEcologico"("id_dadoeco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amostra" ADD CONSTRAINT "Amostra_id_planta_fkey" FOREIGN KEY ("id_planta") REFERENCES "Planta"("id_planta") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amostra" ADD CONSTRAINT "Amostra_id_expedicao_fkey" FOREIGN KEY ("id_expedicao") REFERENCES "Expedicao"("id_expedicao") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amostra" ADD CONSTRAINT "Amostra_id_relevo_fkey" FOREIGN KEY ("id_relevo") REFERENCES "TipoRelevo"("id_relevo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amostra" ADD CONSTRAINT "Amostra_id_solo_fkey" FOREIGN KEY ("id_solo") REFERENCES "TipoSolo"("id_solo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmostraDado" ADD CONSTRAINT "AmostraDado_id_amostra_fkey" FOREIGN KEY ("id_amostra") REFERENCES "Amostra"("id_amostra") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmostraDado" ADD CONSTRAINT "AmostraDado_id_dadoeco_id_itemdado_fkey" FOREIGN KEY ("id_dadoeco", "id_itemdado") REFERENCES "ItemDado"("id_dadoeco", "id_itemdado") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmostraDado" ADD CONSTRAINT "AmostraDado_id_dadoeco_fkey" FOREIGN KEY ("id_dadoeco") REFERENCES "DadoEcologico"("id_dadoeco") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AmostraMidia" ADD CONSTRAINT "AmostraMidia_id_amostra_fkey" FOREIGN KEY ("id_amostra") REFERENCES "Amostra"("id_amostra") ON DELETE SET NULL ON UPDATE CASCADE;
