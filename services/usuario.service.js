const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class UsuarioService {

  async create(data) {
    const newUser = await models.Usuario.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.Usuario.findAll();
    return rta
  }

  async findOne(id) {
    const usuario = await models.Usuario.findByPk(id);
    if(!usuario) {
      throw boom.notFound('usuario no encontrado');
    }
    return usuario;
  }

  async update(id, changes) {
    const usuario = await this.findOne(id);
    const rta = await usuario.update(changes);
    return rta;
  }

  async delete(id) {
    const usuario = await this.findOne(id);
    await usuario.destroy();
    return { id }
  }


}

module.exports = UsuarioService;

