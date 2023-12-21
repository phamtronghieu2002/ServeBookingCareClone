import * as service from "..//services/doctorClinicSpecialService"

export const handleFindAll = async (req, res) => {
    const { doctorID } = req.params;
  
    if (doctorID) {
      const response = await service.findAll(doctorID);
      return response
        ? res.status(200).json(response)
        : res.status(500).json({ message: "server error!!!" });
    }
  
    return res.status(401).json({ message: "missing param !!!" });
  };

  export const handeAdd =async (req, res) => {
    const { doctorID,clinicID,priceID,paymentID,provinceID } = req.body;
  console.log('====================================');
  console.log(doctorID,clinicID,priceID,paymentID,provinceID );
  console.log('====================================');
    if ( doctorID,clinicID,priceID,paymentID,provinceID ) {
      const response = await service.add(doctorID,clinicID,priceID,paymentID,provinceID);
      return response
        ? res.status(200).json(response)
        : res.status(500).json({ message: "server error!!!" });
    }
  
    return res.status(401).json({ message: "missing param !!!" });
  };