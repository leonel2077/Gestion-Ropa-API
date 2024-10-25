'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class SaleDetail extends Model {
      static associate(models) {
          SaleDetail.belongsTo(models.Sale, {
            foreignKey: 'saleId',
            onDelete: 'CASCADE'
          });
          SaleDetail.belongsTo(models.Clothes, {
            foreignKey: 'clothesId',
            onDelete: 'CASCADE'
          });
        }
  }
  
    SaleDetail.init({
      saleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Sales',
          key: 'id'
        },
      },
      clothesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Clothes',
          key: 'id'
        },
      },
      price: { 
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: true,
      }
    }, {
      sequelize,
      modelName: 'SaleDetail',
      timestamps: true,
    });
  
    return SaleDetail;
};