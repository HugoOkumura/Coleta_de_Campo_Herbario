import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Rota inicial só pra testar
router.get('/', (req, res) => {
  res.send('Hello World');
});

// Rota para listar as tabelas do banco (nomes)
router.get('/tabelas', async (req, res) => {
  try {
    // Aqui listamos as tabelas do schema public no PostgreSQL
    const result = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
        AND table_type = 'BASE TABLE';
    `;
    // result será array de objetos [{table_name: 'Amostra'}, ...]
    const tabelas = result.map(row => row.table_name);
    res.json({ tabelas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar tabelas' });
  }
});

export default router;
