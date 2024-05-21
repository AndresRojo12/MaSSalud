const boom = require('@hapi/boom');
//const bcrypt = require('bcrypt');
const capitalCase  = require('../utils/transform/text');
const { sendConfirmationEmail }= require('../utils/auth/strategies/notificacion.cita');
const { models } = require('./../libs/sequelize');

class CitaService {

  async create(data, userId) {

    const capitalizedData = {};
    for (const key in data) {
      if (typeof data[key] === 'string') {
        capitalizedData[key] = capitalCase(data[key]);
      } else {
        capitalizedData[key] = data[key];
      }
    }
    const newCita = await models.CitaMedica.create({
      ...capitalizedData,
      userId,
    });
    const user = await models.Usuario.findByPk(userId);

    await sendConfirmationEmail(
      user.email,
      user.name,
      newCita.hour,
      newCita.doctor,
      user.name
    );
    return newCita;
  }

  async find() {
    const rta = await models.CitaMedica.findAll();
    return rta
  }


  async findOne(id) {
    const cita = await models.CitaMedica.findByPk(id);
    if(!cita) {
      throw boom.notFound('cita no encontrada');
    }
    return cita;
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
    const cita = await this.findOne(id);
    const rta = await cita.update({
      ...capitalizedData,
      changes

    });
    return rta;
  }

  async delete(id) {
    const cita = await this.findOne(id);
    await cita.destroy();
    return { id }
  }


}

module.exports = CitaService;


