'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [
      { name: 'Estados Unidos', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Canada', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mexico', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Brasil', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Italia', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Francia', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alemania', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Japon', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
