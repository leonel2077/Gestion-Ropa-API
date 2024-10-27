'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword1 = await bcrypt.hash('password123', 10);
    const hashedPassword2 = await bcrypt.hash('password321', 10);
    const hashedPassword3 = await bcrypt.hash('contraseña123', 10);
    const hashedPassword4 = await bcrypt.hash('contraseña321', 10);

    return queryInterface.bulkInsert('Users', [
      { name: 'Administrador1', email: 'admin1@example.com', password: hashedPassword1, role: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Administrador2', email: 'admin2@example.com', password: hashedPassword2, role: 'admin', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vendedor1', email: 'vendedor1@example.com', password: hashedPassword3, role: 'user', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vendedor2', email: 'vendedor2@example.com', password: hashedPassword4, role: 'user', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
