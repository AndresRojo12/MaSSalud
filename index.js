const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const { logError, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');
const routerApi = require('./routes');
require('./utils/auth'); // Asegúrate de que este archivo existe y se carga correctamente

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuración de CORS
// const whitelist = ['http://localhost:3001', 'https://massalud.onrender.com'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('No permitido por CORS'));
//     }
//   },
//   credentials: true, // Permite incluir cookies y encabezados de autenticación en las solicitudes
// };
app.use(cors());

// Servir archivos estáticos de la aplicación frontend (Nuxt.js)
const nuxtDistPath = path.join(__dirname, './frontend/dist');
app.use(express.static(nuxtDistPath));

// Ruta para servir el archivo HTML principal de la aplicación frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(nuxtDistPath, 'index.html'));
});

// Configuración de rutas API
routerApi(app);

// Manejo de errores
app.use(logError);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
