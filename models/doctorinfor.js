"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorInfor extends Model {
    static associate(models) {

      DoctorInfor.belongsTo(models.Allcode, {
        foreignKey: "paymentID",
        targetKey: "key_id",
        as: "paymentInfo",
      });
      DoctorInfor.belongsTo(models.Allcode, {
        foreignKey: "provinceID",
        targetKey: "key_id",
        as: "provinceInfo",
      });
      DoctorInfor.belongsTo(models.Allcode, {
        foreignKey: "priceID",
        targetKey: "key_id",
        as: "priceInfo",
      });
      DoctorInfor.belongsTo(models.User, {
        foreignKey: "doctorID",
        targetKey: "id",
        as: "doctorInfors",
      });


      DoctorInfor.belongsTo(models.Clinic, {
        foreignKey: "clinicID",
        targetKey: "id",
        as: "clinicInfors",
      });
    }
  }
  DoctorInfor.init(
    {
      priceID: DataTypes.STRING,
      provinceID: DataTypes.STRING,
      paymentID: DataTypes.STRING,
      doctorID: DataTypes.INTEGER,
      clinicID: DataTypes.INTEGER,
      note: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DoctorInfor",
    }
  );
  return DoctorInfor;
};
