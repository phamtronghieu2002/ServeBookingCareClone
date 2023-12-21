import * as doctorInforService from "..//services//doctorInforService"
export const handeFindAll=async (req,res) =>{


    const { doctorID } = req.params;
  
    if (doctorID) {
      const response = await doctorInforService.findAll(doctorID);
      return response
        ? res.status(200).json(response)
        : res.status(500).json({ message: "server error!!!" });
    }
  
    return res.status(401).json({ message: "missing param !!!" });
   
   
   
   }