"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Markdown extends Model {
    static associate(models) {

      Markdown.belongsTo(models.User, {
        foreignKey: "doctorId",
        as: "doctorInfor",
      });
      Markdown.belongsTo(models.Clinic, {
        foreignKey: "clinicId",
        as: "clinicInfor",
      });
      Markdown.belongsTo(models.Specialist, {
        foreignKey: "specialtyId",
        as: "specialtyInfor",
      });

    }
  }
  Markdown.init(
    {
      contentHTML: DataTypes.TEXT("long"),
      contentMarkdown: DataTypes.TEXT("long"),
      desc: DataTypes.TEXT("long"),
      doctorId: DataTypes.INTEGER,

      clinicId: DataTypes.INTEGER,
      specialtyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Markdown",
    }
  );
  return Markdown;
};
