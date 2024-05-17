const express = require('express');

const usuariosRouter = require('./usuarios.router');
const citasRouter = require('./citas.router');

const authRouter = require('./auth.router');


const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/v1', router)
   // se crea una ruta maestra o principal para controlar el resto de la rutas
  router.use('/usuarios', usuariosRouter);
  router.use('/citas', citasRouter);
  router.use('/auth',authRouter);
}

module.exports = routerApi;
