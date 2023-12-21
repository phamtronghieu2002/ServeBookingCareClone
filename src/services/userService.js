import db from "../../models";
import bcrypt from "bcrypt";
import { Buffer } from "node:buffer";

export const bufferTobase64 =(bufferImage)=>{


  return new Buffer(bufferImage, "base64").toString("binary");
}

const hashPassword = (saltRounds, password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  return hash;
};

export const addUser = async (
  firstname,
  lastname,
  gender,
  address,
  phonenumber,
  roleID,
  positionID,
  email = "",
  password = "",
  image = "",
  descriminator
) => {
  try {
    let user;
    if (descriminator) {
      const passwordHash = hashPassword(10,password);
      user = await db.User.create({
        firstname,
        lastname,
        gender,
        address,
        phonenumber,
        roleID,
        positionID,
        email,
        password: passwordHash,
        image,
      },{raw:true});
    } else {
      user = await db.User.create({
        firstname,
        lastname,
        gender,
        address,
        phonenumber,
        roleID,
        positionID,
      },{raw:true});
    }
    if (user) {

     console.log(user.password !== undefined)
     console.log("user >>>>",user)

     if (user.password !== undefined) {
       user={...user.dataValues}
      delete user.password;
    }
        
  


      return {
        message: "ok",
        errCode: 0,
        data: user,
      };
    }

    return {
      message: "fail",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id) => {
  try {
    const user = await db.User.findOne({ where: { id }, raw: true });
    if (user) {
   
    const imageBase64=bufferTobase64(user.image)
      return {
        message: "ok",
        errCode: 0,
        data: { ...user, image: imageBase64, defaultImg: user.image },
      };
    }
    return {
      message: "user not found",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};
export const getUserByRole = async (roleID) => {
  try {
    const user = await db.User.findAll({ where: { roleID}, raw: true , attributes: { exclude: ['password'] }});
    console.log(db)
    if (user.length>0) {
          
      user.forEach(u => {
          if(u.image)
          {
            u.image=bufferTobase64(u.image)
          }
      });

      // const imageBase64=bufferTobase64(user.image)
      return {
        message: "ok",
        errCode: 0,
        data: user,
      };
    }
    return {
      message: "not have user !!! ",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }
};


export const addSchedule = async (data)=>{

  try {
    const schedule = await db.Schedule.bulkCreate(data);

    if(schedule)
    {
      return {
        message: "ok",
        errCode: 0,
        data: schedule,
      };
    }
    return {
      message: "fail",
      errCode: 1,
    };
  } catch (error) {
    console.log(error);
  }


}