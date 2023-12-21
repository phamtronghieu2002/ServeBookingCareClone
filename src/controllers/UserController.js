import * as userService from "..//services//userService";
export const handleAddUser = async (req, res) => {
  const {
    firstname,
    lastname,
    gender,
    address,
    phonenumber,
    roleID,
    positionID,
  } = req.body;
  console.log(
    req.body
  );
  const { descriminator } = req.params;

  if (descriminator) {
    if (descriminator === "Admin" || descriminator === "Doctor") {

      const { email, password, image } = req.body;
      if (
        (firstname,
        lastname,
        gender,
        address,
        phonenumber,
        roleID,
        positionID,
        email,
        password,
        image)
      ) {
        const response = await userService.addUser(
          firstname,
          lastname,
          gender,
          address,
          phonenumber,
          roleID,
          positionID,
          email,
          password,
          image,
          descriminator
        );
      
        if (response) {
          return res.status(200).json(response);
        }

        return res.status(500).json({ message: "server error !!!" });
      }
    } else {
      return res.status(401).json({ message: "params not correct !!!" });
    }
  } else {
    if (
      (firstname, lastname, gender, address, phonenumber, roleID, positionID)
    ) {
      const response = await userService.addUser(
        firstname,
        lastname,
        gender,
        address,
        phonenumber,
        roleID,
        positionID
      );
      if (response) {
        return res.status(200).json(response);
      }

      return res.status(500).json({ message: "server error !!!" });
    }
  }
  return res.status(401).json({ message: "missing params !!!" });
};

export const handleGetUserByRole = async (req,res)=>{
    
  const {roleid} = req.params;

  if(roleid)
  {
    const response =await userService.getUserByRole(roleid)
      if(response)
      {
        
      return  res.status(200).json(response);
      }

      return  res.status(500).json({ message: "server error !!!" });
  }

  return res.status(401).json({ message: "missing params !!!" });




}


export const handleAddSchedule = async (req,res)=>{

  //currentNumber,maxNumber,doctorId,date,timeType


  const data = req.body;
  console.log(req.body)
 

  if(data.length>0)
  {
    const response = await userService.addSchedule(data);
    if(response)
    {
      return res.status(200).json(response);
    }
    return res.status(500).json({ message: "server error !!!" });
  }

  return res.status(400).json({message: "missing param!!"})



}


