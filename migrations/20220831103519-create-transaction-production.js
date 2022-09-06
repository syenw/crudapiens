'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TransactionProductions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      item_id: {
        allowNull: true,
        autoIncrement: false,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('transactionproductions', {
      fields: ['item_id'],
      type: 'foreign key',
      name: 'fk_transactionproduction_item_id',
      references: { //Required field
        table: 'items',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }
    )).then(() => queryInterface.addConstraint('transactionproductions', {
      fields: ['location_id'],
      type: 'foreign key',
      name: 'fk_transactionproduction_location_id',
      references: { //Required field
        table: 'locations',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TransactionProductions');
  }
};