'use strict';


module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('SaleDetails', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        saleId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Sales',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        clothesId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Clothes',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 1
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        }
      });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('SaleDetails');
    }
};