import db from "..//..//models";

export const getAllcodeByType = async (typeID) => {
try {
  
    const allCodes = await db.Allcode.findAll({
        where: { type_id: typeID },
        raw: true,
        attributes: ['key_id', 'valueEN','valueVN'],
      });
  console.log(allCodes)
  if(allCodes.length>0)
  {
    return {
        errCode:0,
        message:"ok",
        data:allCodes
    }
  }
  return {
    errCode:1,
    message:"allcode not found !!!"
    
}
} catch (error) {
    console.log(error)
}

  


};
