const sequelize = require('../../libs/sequelize');

const { Usuario, UsuarioSchema } = require('./usuario.model');
const { CitaMedica, CitaSchema } = require('./citas_medicas.model');


const setupModels = (sequelize) => {
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  CitaMedica.init(CitaSchema, CitaMedica.config(sequelize));
  CitaMedica.associate(sequelize.models);
}

module.exports = setupModels;
