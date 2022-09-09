'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterAchievment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MasterAchievment.init({
    transactionproduction_id: DataTypes.INTEGER,
    code: DataTypes.STRING,
    time_from: DataTypes.DECIMAL,
    time_to: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'MasterAchievment',
  });
  MasterAchievment.associate = function(models) {
    MasterAchievment.belongsTo(models.TransactionProduction, {foreignKey: 'transactionproduction_id', as: 'transaction_productions'})
  };
  return MasterAchievment;
};