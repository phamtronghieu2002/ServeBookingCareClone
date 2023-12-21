import db from "../../models";
export const addSchedule = async (data) => {
  try {
    const timeDel = data[data.length - 1];
    console.log(data);
    if (timeDel.length > 0) {
      console.log("alo cac ban oi");
      await db.Schedule.destroy({ where: { timeType: timeDel } });
    }

    data.pop();
    const shedules = await db.Schedule.bulkCreate(data, {
      ignoreDuplicates: true,
      validate: true,
    });
    if (shedules) {
      return {
        errCode: 0,
        message: "success !!",
        data: shedules,
      };
    }

    return {
      errCode: 1,
      message: "fail to create",
    };
  } catch (error) {
    console.log(error);
  }
};

export const getTimeByDocTime = async (data) => {
  try {
    const shedules = await db.Schedule.findAll({
      attributes: ["date", "timeType"],
      where: {

        doctorId: data.doctorId,
        date: data.date,
      },
      include: {
        model: db.Allcode,
        required: true,
        as: 'timeInfo'
      }
    });
    if (shedules) {
      return {
        errCode: 0,
        message: "success !!",
        data: shedules,
      };
    }

    return {
      errCode: 1,
      message: "fail to create",
    };
  } catch (error) {
    console.log(error);
  }
};
