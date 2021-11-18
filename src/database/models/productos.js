'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Productos.init({
    nombreproducto: DataTypes.STRING,
    detalleproducto: DataTypes.STRING,
    precioproducto: DataTypes.STRING,
    imagenesId: DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER,
    detallepedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};