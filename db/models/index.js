const sequelize = require('../../libs/sequelize');

const { Usuario, UsuarioSchema } = require('./usuario.model');

const setupModels = (sequelize) => {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
}

module.exports = setupModels;
