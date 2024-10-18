'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Clothes extends Model {
    static associate(models) {
      Clothes.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        onDelete: 'CASCADE'
      });
      Clothes.belongsTo(models.GarmentType, {
        foreignKey: 'garmentTypeId',
        onDelete: 'CASCADE'
      });
    }
  }

  Clothes.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Brands',
        key: 'id'
      },
      allowNull: false,
    },
    garmentTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'GarmentTypes',
        key: 'id'
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Clothes',
    timestamps: true,
  });

  return Clothes;
};
