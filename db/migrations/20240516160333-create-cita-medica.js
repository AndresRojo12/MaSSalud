'use strict';

const {CitaSchema, CITA_TABLE} = require('./../models/citas_medicas.model')
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CITA_TABLE, CitaSchema);
  },

  async down (queryInterface) {
   await queryInterface.drop(CITA_TABLE);
  }
};
