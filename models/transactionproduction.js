'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionProduction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TransactionProduction.init({
    location_id: DataTypes.INTEGER,
    item_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    qty_actual: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionProduction',
  });
  TransactionProduction.associate = function(models) {
    TransactionProduction.belongsTo(models.Item, {foreignKey: 'item_id', as: 'items'}),
    TransactionProduction.belongsTo(models.Location, {foreignKey: 'location_id', as: 'locations'})
  };
  return TransactionProduction;
};