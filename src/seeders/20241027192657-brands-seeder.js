'use strict';

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Brands', [
      { name: 'Nike', countryId: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Adidas', countryId: '7', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Puma', countryId: '7', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Reebok', countryId: '1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Under Armour', countryId: '1', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Brands', null, {});
  }
};

