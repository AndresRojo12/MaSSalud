'use strict';

const bcrypt = require('bcrypt');
const { config } = require('../../config/config');

module.exports = {
  up: async (queryInterface) => {
    const SuperPasswordHash = await bcrypt.hash(config.AdminPassword, 10);
    const adminPasswordHash = await bcrypt.hash(config.passwordAdmin, 10);

    // Inserta usuarios
    await queryInterface.bulkInsert('usuarios', [
      {
        email: config.emailSuperAdmin,
        password: SuperPasswordHash,
        role: 'Super Admin',
        create_at: new Date(),
        update_at: new Date(),
      },
      {
        email: config.emailAdmin,
        password: adminPasswordHash,
        role: 'Admin',
        create_at: new Date(),
        update_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('usuarios', { username: ['superadmin', 'admin'] }, {});
  },
};
