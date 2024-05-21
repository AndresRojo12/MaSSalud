const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const path = require('path');
const { logError, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Configuración de CORS
const whitelist = ['http://localhost:3001', 'https://massalud.onrender.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true, // Permite incluir cookies y encabezados de autenticación en las solicitudes
};
app.use(cors(corsOptions));

// Autenticación
require('./utils/auth');

// Servir archivos estáticos de la aplicación frontend
const nuxtDistPath = path.join(__dirname, './frontend/dist');
app.use(express.static(nuxtDistPath));

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
