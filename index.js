// index.js
require('dotenv').config(); // Carga variables desde .env

const express = require('express');
const bodyParser = require('body-parser');
const enviarFondos = require('./asignarFondos'); // Importa la lógica

const app = express();

// Middleware para procesar JSON
app.use(bodyParser.json());

// Ruta principal para recibir datos del frontend
app.post('/api/enviarFondos', enviarFondos);

// Servir frontend si está en /public
app.use(express.static('public'));

// Puerto dinámico para Render o 3000 local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor MotoFuria activo en puerto ${PORT}`);
});
