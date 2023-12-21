import * as scheduleService from "..//services//scheduleService"
export const handleAddSchedule =async (req,res)=>{

      const data= req.body;
 console.log(data)
      if(data)
      {
            const response = await scheduleService.addSchedule(data);
            return response ? res.status(200).json(response):res.status(500).json({message:"server error !!"}) 
        

      }
      res.status(400).json({message:"missing param !!"})


}

export const handleGetSheduleByDocTime =async (req,res)=>{

      const data= req.query;
      console.log(">>data:",data)
      if(data)
      {
            const response = await scheduleService.getTimeByDocTime(data);
            return response ? res.status(200).json(response):res.status(500).json({message:"server error !!"}) 
        

      }
    return  res.status(400).json({message:"missing param !!"})


}