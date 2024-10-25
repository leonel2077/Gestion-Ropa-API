'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      // Relación con Sale
      Payment.belongsTo(models.Sale, {
        foreignKey: 'SaleId',
        onDelete: 'CASCADE'
      });
    }
  }

  Payment.init({
    // ID primario
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    SaleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sales',
        key: 'id',
      },
      allowNull: false
    },
    PaymentMethod: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Payment',
    timestamps: true,
  });

  return Payment;
};
