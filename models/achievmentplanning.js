'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AchievmentPlanning extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AchievmentPlanning.init({
    item_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    qty_target: DataTypes.INTEGER,
    time_target: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'AchievmentPlanning',
  });
  AchievmentPlanning.associate = function(models) {
    AchievmentPlanning.belongsTo(models.Item, {foreignKey: 'item_id', as: 'items'})
  };
  return AchievmentPlanning;
};