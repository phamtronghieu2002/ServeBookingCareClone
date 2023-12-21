import * as doctorService from "..//services//doctorService"

export const handleGetAllDoctor =async (req,res) =>{


 const response =await doctorService.getAllDoctor()
 
 if(response)
 {
        return res.status(200).json(response)
 }

    return res.status(500).json({message:"server error"})



}

export const handleGetDoctorLimit =async (req,res) =>{

   
    const {limit} =req.params

  console.log(limit)

     if(limit)
     {
        const response =await doctorService.getDoctorLimit(limit)
    
        if(response)
        {
               return res.status(200).json(response)
        }
       
           return res.status(500).json({message:"server error"})
       
     }
     return  res.status(400).json({message:"missing params !!"})
 
   
   
   }



   export const handleGetDoctorById = async (req,res)=>{
    
 
    const {id}=req.params
    if(id)
    {       

        console.log(id)
        const response =await doctorService.getDoctorById(id)

        if(response)
        {
            return res.status(200).json(response)
        }

         return res.status(500).json("server error !!")
    }


return res.status(400).json({message:"missing param !!"})
}