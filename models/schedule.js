'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {

    static associate(models) {
      Schedule.belongsTo(models.User,{ foreignKey: 'doctorId', as: 'doctorInfo' });
      Schedule.belongsTo(models.Allcode,{ foreignKey: 'timeType',targetKey:"key_id", as: 'timeInfo' });
    }
  }
  Schedule.init({
    currentNumber: DataTypes.INTEGER,
    maxNumber: DataTypes.INTEGER,
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    doctorId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};