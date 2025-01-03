const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');  // Importando as rotas

app.use(express.json());  // Para interpretar o corpo das requisições como JSON
app.use('/api', userRoutes);  // Usando as rotas de usuário

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
