const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const capitalCase  = require('../utils/transform/text');
const { sendConfirmationEmail }= require('../utils/auth/strategies/email');
const { models } = require('./../libs/sequelize');

class UsuarioService {

  async create(data) {

    const hash = await bcrypt.hash(data.password, 10);
    const capitalizedData = {};
    for (const key in data) {
      if (typeof data[key] === 'string') {
        capitalizedData[key] = capitalCase(data[key]);
      } else {
        capitalizedData[key] = data[key];
      }
    }
    const newUser = await models.Usuario.create({
      ...capitalizedData,
      password: hash
    });
    delete newUser.dataValues.password
    await sendConfirmationEmail(newUser.email, newUser.name);
    return newUser;
  }

  async find() {
    const rta = await models.Usuario.findAll();
    return rta
  }

  async findByEmail(email) {
    const rta = await models.Usuario.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const usuario = await models.Usuario.findByPk(id);
    if(!usuario) {
      throw boom.notFound('usuario no encontrado');
    }
    return usuario;
  }

  async update(id, changes) {
    const capitalizedData = {};
    for (const key in changes) {
      if (typeof changes[key] === 'string') {
        capitalizedData[key] = capitalCase(changes[key]);
      } else {
        capitalizedData[key] = changes[key];
      }
    }
    const usuario = await this.findOne(id);
    const rta = await usuario.update({
      ...capitalizedData,
      changes

    });
    return rta;
  }

  async delete(id) {
    const usuario = await this.findOne(id);
    await usuario.destroy();
    return { id }
  }


}

module.exports = UsuarioService;


