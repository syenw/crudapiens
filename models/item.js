'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  Item.associate = function(models) {
    Item.hasMany(models.AchievmentPlanning, {foreignKey: 'item_id', as: 'achievmentplannings'}),
    Item.hasMany(models.TransactionProduction, {foreignKey: 'item_id', as: 'transactionproductions'})
  };
  return Item;
};