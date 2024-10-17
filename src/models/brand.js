'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.belongsTo(models.Country, {
        foreignKey: 'countryId',
        onDelete: 'CASCADE'
      });
    }
  }

  Brand.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    countryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Countries', 
        key: 'id',
      },
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Brand',
    timestamps: true,
  });

  return Brand;
};
