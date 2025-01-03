const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getUser(req, res) {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os usuários' });
  }
}

module.exports = { getUser }; 
