require('dotenv').config();

const Servidor = require('./models/servidor');

// INSTANCIA DE SERVIDOR Y CORRER EN PUERTO
const servidor = new Servidor();
servidor.listen();