'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {

    static associate(models) {
      Booking.belongsTo(models.User,{ foreignKey: 'doctorId', as: 'doctorInfo' });
      Booking.belongsTo(models.User,{ foreignKey: 'patientId', as: 'patientInfo' });
      Booking.belongsTo(models.Allcode,{ foreignKey: 'statusId',targetKey: 'key_id', as: 'statusInfo' });
      Booking.belongsTo(models.Allcode,{ foreignKey: 'timeType',targetKey: 'key_id', as: 'timeInfor' });

    }
  }
  Booking.init({
    date: DataTypes.DATE,
    timeType: DataTypes.STRING,
    statusId:  DataTypes.STRING,
    doctorId:  DataTypes.INTEGER,
    patientId:  DataTypes.INTEGER,
    token:DataTypes.STRING,

    
  }, {
    sequelize,
    modelName: 'Booking',

  });
  return Booking;
};