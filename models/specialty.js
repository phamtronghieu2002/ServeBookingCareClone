'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      
      Specialist.hasMany(models.Markdown, { foreignKey: 'specialistId', as: 'specialistInfor' });

      Specialist.hasMany(models.doctor_clinic_specialty, { foreignKey: 'specialtyId', sourceKey:"id",as: 'SpecialistInfo' });

      // Specialist.belongsToMany(models.Clinic, { through: 'doctor_clinic_specialties', as: 'clinic' });
      // Specialist.belongsToMany(models.User, { through: 'doctor_clinic_specialties', as: 'user' });
    }
  }
  Specialist.init({
    descriptions: DataTypes.STRING,
    img: DataTypes.BLOB('long'),
    name: DataTypes.STRING,
    doctorId:  DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Specialist',
  });
  return Specialist;
};