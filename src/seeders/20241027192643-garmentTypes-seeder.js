'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('GarmentTypes', [
      { name: 'Remeras', description: 'Formato: S, M, L, XL, XXL', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Camisas', description: 'Formato: S, M, L, XL, XXL', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pantalones', description: 'Formato: 38, 40, 42, 44, 46, 48', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Zapatillas', description: 'Formato: 38, 38.5, 39, 39.5, 40, 40.5, 41', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Camperas', description: 'Formato: S, M, L, XL, XXL', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Buzos', description: 'Formato: S, M, L, XL, XXL', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gorras', description: 'Formato: S, M, L, XL, XXL', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Medias', description: 'Formato: S, M, L, XL, XXL', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GarmentTypes', null, {});
  }
};
