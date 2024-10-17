'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {}

  Country.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
    }, {
    sequelize,
    modelName: 'Country',
    timestamps: true,
  });

  return Country;
};
