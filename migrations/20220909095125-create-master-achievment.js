'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MasterAchievments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionproduction_id: {
        type: Sequelize.INTEGER
      },
      code: {
        allowNull: true,
        type: Sequelize.STRING
      },
      time_from: {
        allowNull: true,
        type: Sequelize.DECIMAL(4, 2)
      },
      time_to: {
        allowNull: true,
        type: Sequelize.DECIMAL(4, 2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('masterachievments', {
      fields: ['transactionproduction_id'],
      type: 'foreign key',
      name: 'fk_masterachievments_transactionproduction_id',
      references: { //Required field
        table: 'transactionproductions',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MasterAchievments');
  }
};