import db from "../../models";
export const findAll = async (id) => {
  try {
    const doctors = await db.DoctorInfor.findOne({
      raw: true,
      where: {
        doctorID: Number(id),
      },
      include: [
        {
          model: db.Clinic,
          as: "clinicInfors",
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
    if (doctors) {

      return {
        message: "ok",
        errCode: 0,
        data: doctors,
      };
    }
    return {
      message: "fail to load all doctors Infor",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};