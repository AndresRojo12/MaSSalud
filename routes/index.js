const usuariosRouter = require('./usuarios.router');

const routerApi = (app) => {
  app.use('/usuarios', usuariosRouter);
}

module.exports = routerApi;
