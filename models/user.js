'use strict';
const {
  Model
} = require('sequelize');
const markdown = require('./markdown');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {


   

      User.belongsTo(models.Allcode, { foreignKey: 'gender',targetKey:"key_id" ,as: 'genderInfo' });
      User.belongsTo(models.Allcode, { foreignKey: 'roleID',targetKey:"key_id", as: 'roleInfo' });
      User.belongsTo(models.Allcode, { foreignKey: 'positionID',targetKey:"key_id", as: 'positionInfo' });
      
      User.hasMany(models.Markdown, { foreignKey: 'doctorId', as: 'doctorInfor' });

      User.hasMany(models.doctor_clinic_specialty, { foreignKey: 'doctorId',sourceKey:"id", as: 'doctorInfo' });



      // User.belongsToMany(models.Clinic, { through: 'doctor_clinic_specialties', as: 'clinic' });
      // User.belongsToMany(models.Specialist, { through: 'doctor_clinic_specialties', as: 'specialty' });
      User.hasMany(models.DoctorInfor,{ foreignKey: 'doctorID', as: 'doctorInfors' })
      
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    positionID: DataTypes.STRING,
    roleID: DataTypes.STRING,
    image: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};