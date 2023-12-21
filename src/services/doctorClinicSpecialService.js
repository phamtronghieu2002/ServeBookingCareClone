import db from "../../models";
export const findAll = async (id) => {
  try {
    const doctors = await db.doctor_clinic_specialty.findAll({
      raw: true,
      where: {
        doctorId: Number(id),
      },
      include: [
        {
          model: db.Clinic,
          as: "clinicInfo",
          attributes: {
            exclude: ["img"],
          },
        },
        {
          model: db.Allcode,
          as: "paymentInfo",
        },
        {
          model: db.Allcode,
          as: "priceInfo",
        }
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

export const add = async (
  doctorID,
  clinicID,
  priceID,
  paymentID,
  provinceID
) => {
  console.log(doctorID, clinicID, priceID, paymentID, provinceID);
  try {
    const result = await db.DoctorInfor.create(
      {
        doctorID,
        clinicID,
        priceID,
        paymentID,
        provinceID,
        note: "",
        count: 0,
      },
      { raw: true }
    );
    if (result) {
      return {
        message: "ok",
        errCode: 0,
        data: result,
      };
    }
    return {
      message: "insert fail",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};
