'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuarios.init({
    nombre: DataTypes.STRING,
    domicilio: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    nombreavatar: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    domicilioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};