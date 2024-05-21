const express = require('express');
const usuariosRouter = require('./usuarios.router');
const citasRouter = require('./citas.router');
const authRouter = require('./auth.router');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router); // Ruta principal para la API
  router.use('/usuarios', usuariosRouter);
  router.use('/citas', citasRouter);
  router.use('/auth', authRouter);
};

module.exports = routerApi;
