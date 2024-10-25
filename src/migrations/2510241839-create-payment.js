'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      SaleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sales', // Nombre de la tabla que referenciamos
          key: 'id'
        },
        onDelete: 'CASCADE' // Elimina los pagos relacionados si la venta es eliminada
      },
      PaymentMethod: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Payments');
  }
};
