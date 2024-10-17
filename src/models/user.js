'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
    hooks: {
      beforeCreate: async (user, options) => {
        const salt = await genSalt(10);
        user.password = await hash(user.password, salt);
      }
    }
  });

  return User;
};
