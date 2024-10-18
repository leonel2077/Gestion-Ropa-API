'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GarmentType extends Model {}

  GarmentType.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'GarmentType',
    timestamps: true,
  });

  return GarmentType;
};
