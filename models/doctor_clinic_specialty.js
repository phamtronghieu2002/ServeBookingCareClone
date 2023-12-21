'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctor_clinic_specialty extends Model {

    static associate(models) {
      doctor_clinic_specialty.belongsTo(models.User, { foreignKey: 'doctorId',targetKey:"id", as: 'doctorInfo' });
      doctor_clinic_specialty.belongsTo(models.Clinic, { foreignKey: 'clinicId',targetKey:"id", as: 'clinicInfo' });
      doctor_clinic_specialty.belongsTo(models.Specialist, { foreignKey: 'specialtyId',targetKey:"id", as: 'SpecialistInfo' });

      
    }
  }
  doctor_clinic_specialty.init({
    clinicId:INTEGER,
    specialtyId:INTEGER,
    doctorId:INTEGER
  }, {
    sequelize,
    modelName: 'doctor_clinic_specialty',
  });
  doctor_clinic_specialty.removeAttribute('id')

  return doctor_clinic_specialty;
};