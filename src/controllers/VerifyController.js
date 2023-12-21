import db from "../../models";

const handleLogicVerify =async(token)=>{
    const booking = await db.Booking.findOne({ 
        where: { token,statusId:'S1'} 
    });
    if(booking)
    {
        await booking.update({ statusId: "S2" })
        await booking.save()
        return  {
            message:'xac minh thanh cong'
        }
    }
    return  {
        message:'xac minh ko thanh cong'
    }
}


export const hanldeVerify =async (req, res) => {
  const { token } = req.query;
  if (token) {
    const response=await handleLogicVerify(token)
    return response ? res.status(400).json(response) : res.status(500).json("server error")
  }

  return res.status(400).json("missing param");
};
