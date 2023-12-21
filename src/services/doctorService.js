import db from "../../models";
import { bufferTobase64 } from "./userService";
export const getAllDoctor = async () => {
  try {
    const doctors = await db.User.findAll({
      attributes: {
        exclude: ["password"],
      },
      raw: true,
      where: {
        roleID: "R2", 
      },
      include: [
        {
          model: db.Allcode,
          as: "positionInfo",
          attributes: ["key_id", "type_id", "valueEN", "valueVN"],
        },
      ],
    });
    if (doctors.length > 0) {
      doctors.forEach((u) => {
        if (u.image) {
          u.image = bufferTobase64(u.image);
        }
      });

      return {
        message: "ok",
        errCode: 0,
        data: doctors,
      };
    }
    return {
      message: "fail to load all doctors",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getDoctorLimit = async (limit) => {
  try {
    const doctors = await db.User.findAll({
      attributes: { exclude: ["password"] },
      raw: true,
      limit: Number(limit),
      where: {
        roleID: "R2",
      },
      include: [
        {
          model: db.Allcode,
          as: "positionInfo",
          attributes: ["key_id", "type_id", "valueEN", "valueVN"],
        },
      ],
    });
    if (doctors.length > 0) {
      doctors.forEach((u) => {
        if (u.image) {
          u.image = bufferTobase64(u.image);
        }
      });
      return {
        message: "ok",
        errCode: 0,
        data: doctors,
      };
    }
    return {
      message: "fail to load  doctors",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getDoctorById = async (id) => {
  try {
    const user = await db.User.findOne({
      where: { id },
      nest:true,
      role: "R2",
      raw: true,
      attributes: { exclude: ["password,email"] },
      include: [
        {
          model: db.Markdown,
          as: "doctorInfor",
          attributes: ["contentHTML", "contentMarkdown", "desc"],
        },

        {
          model: db.Allcode,
          as: "positionInfo",
          attributes: ["key_id", "valueVN"],
        },
      ],
    });

    if (user) {
     user.image = bufferTobase64(
      user.image
      );

      return {
        message: "ok",
        errCode: 0,
        data: user,
      };
    }
    return {
      message: "not have doctor !!! ",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};

