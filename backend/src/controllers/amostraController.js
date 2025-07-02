import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const criarAmostra = async (dados) => {
    const {
        id_planta,
        id_expedicao,
        id_relevo,
        id_solo,
        nm_coletor,
        nr_altitude,
        nr_longitude,
        nr_latitude,
        nr_altura,
        nr_DAP,
        nr_CAP,
        ds_exsudado,
        ds_obscomplement
    } = dados;

    return await prisma.amostra.create({
        data: {
            id_planta: Number(id_planta),
            id_expedicao: Number(id_expedicao),
            id_relevo: Number(id_relevo),
            id_solo: Number(id_solo),
            nm_coletor,
            nr_altitude: Number(nr_altitude),
            nr_longitude: Number(nr_longitude),
            nr_latitude: Number(nr_latitude),
            nr_altura: Number(nr_altura),
            nr_DAP: Number(nr_DAP),
            nr_CAP: Number(nr_CAP),
            ds_exsudado,
            ds_obscomplement,
        },
        include: {
            planta: true,
            tipoRelevo: true,
            expedicao: true,
            tipoSolo: true,
        },
    });
}

// Listar todas as amostras
export const listarAmostra = async () => {
    return await prisma.amostra.findMany({
        include: {
            planta: true,
            expedicao: true,
            tipoRelevo: true,
            tipoSolo: true,
            amostra_dados: true,
            amostra_midias: true,
        },
    })
}
// Obter as amostras de uma expedicao por ID
export const obterAmostraExpedicao = async (id) => {
    return await prisma.amostra.findMany({
        where: {
            id_expedicao: Number(id),
        },
        include: {
            planta: true,
            expedicao: true,
            tipoRelevo: true,
            tipoSolo: true,
            amostra_dados: true,
            amostra_midias: true,
        },
    });
}

// Obter uma amostra por ID
export const obterAmostra = async (id) => {
    return await prisma.amostra.findUnique({
        where: { id_amostra: Number(id) },
        include: {
            planta: true,
            expedicao: true,
            tipoRelevo: true,
            tipoSolo: true,
            amostra_dados: true,
            amostra_midias: true,
        },
    })
}

export const atualizarAmostra = async (id, dados) => {
    const idNum = Number(id)
    const {
        id_planta,
        id_expedicao,
        id_relevo,
        id_solo,
        nm_coletor,
        nr_altitude,
        nr_longitude,
        nr_latitude,
        nr_altura,
        nr_DAP,
        nr_CAP,
        ds_exsudado,
        ds_obscomplement
    } = dados;

    const existe = await prisma.amostra.findUnique({
        where: { id_amostra: idNum },
    })
    if (!existe) throw new Error('Amostra não encontrada')

    return await prisma.amostra.update({
        where: { id_amostra: idNum },
        data: {
            id_planta: Number(id_planta),
            id_expedicao: Number(id_expedicao),
            id_solo: Number(id_solo),
            id_relevo: Number(id_relevo),
            nm_coletor,
            nr_altitude: Number(nr_altitude),
            nr_longitude: Number(nr_longitude),
            nr_latitude: Number(nr_latitude),
            nr_altura: Number(nr_altura),
            nr_DAP: Number(nr_DAP),
            nr_CAP: Number(nr_CAP),
            ds_exsudado,
            ds_obscomplement,
        },
    })
}

// Excluir uma amostra
export const excluirAmostra = async (id) => {
    const idNum = Number(id)

    const existe = await prisma.amostra.findUnique({
        where: { id_amostra: idNum },
    })
    if (!existe) throw new Error('Amostra não encontrada')

    return await prisma.$transaction([
        prisma.amostraMidia.deleteMany({
            where: { id_amostra: idNum },
        }),
        prisma.amostraDado.deleteMany({
            where: { id_amostra: idNum },
        }),
        prisma.amostra.delete({
            where: { id_amostra: idNum },
        }),
    ])
}