'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {

    static associate(models) {
      History.belongsTo(models.User,{ foreignKey: 'doctorId', as: 'doctorInfo' });
      History.belongsTo(models.User,{ foreignKey: 'patientId', as: 'patientInfo' });
    }
  }
  History.init({
    descriptions: DataTypes.STRING,
    file: DataTypes.STRING,
    doctorId:  DataTypes.INTEGER,
    patientId:  DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};