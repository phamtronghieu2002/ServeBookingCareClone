'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {

    static associate(models) {
    
      Allcode.hasMany(models.User, { foreignKey: 'gender',sourceKey:"key_id", as: 'genderInfo' });
      Allcode.hasMany(models.User, { foreignKey: 'roleID',sourceKey:"key_id", as: 'roleInfo' });
      Allcode.hasMany(models.User, { foreignKey: 'positionID',sourceKey:"key_id", as: 'positionInfo' });
        
      Allcode.hasMany(models.Schedule,{ foreignKey: 'timeType',sourceKey:"key_id", as: 'timeInfo' });


  

      Allcode.hasMany(models.Booking,{ foreignKey: 'statusId',sourceKey:"key_id", as: 'statusInfo' });
      Allcode.hasMany(models.Booking,{ foreignKey: 'timeType',sourceKey:"key_id", as: 'timeInfor' });


      Allcode.hasMany(models.DoctorInfor, { foreignKey: 'paymentID',sourceKey:"key_id", as: 'paymentInfo' });
      Allcode.hasMany(models.DoctorInfor, { foreignKey: 'provinceID',sourceKey:"key_id", as: 'provinceInfo' });
      Allcode.hasMany(models.DoctorInfor, { foreignKey: 'priceID',sourceKey:"key_id", as: 'priceInfo' });
        
    }
  }
  Allcode.init({
    key_id: DataTypes.STRING,
    type_id: DataTypes.STRING,
    valueEN: DataTypes.STRING,
    valueVN: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allcode',
  });

  Allcode.removeAttribute('id')
  return Allcode;
};