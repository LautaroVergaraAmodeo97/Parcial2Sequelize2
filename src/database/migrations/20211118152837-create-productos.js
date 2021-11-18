'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreproducto: {
        type: Sequelize.STRING
      },
      detalleproducto: {
        type: Sequelize.STRING
      },
      precioproducto: {
        type: Sequelize.STRING
      },
      imagenesId: {
        type: Sequelize.INTEGER
      },
      categoriaId: {
        type: Sequelize.INTEGER
      },
      detallepedidoId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Productos');
  }
};