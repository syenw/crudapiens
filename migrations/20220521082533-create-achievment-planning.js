'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AchievmentPlannings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      qty_target: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      time_target: {
        allowNull: false,
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
    }).then(() => queryInterface.addConstraint('achievmentplannings', {
      fields: ['item_id'],
      type: 'foreign key',
      name: 'fk_item_details_item_id',
      references: { //Required field
        table: 'items',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }));
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AchievmentPlannings');
  }
};