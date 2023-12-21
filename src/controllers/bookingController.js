import * as bookingService from "../services/bookingService"
export const handleAdd = async (req, res) => {
  const { fullname, email, address,doctorId,keyID } = req.body;

  if (fullname,email, address,doctorId ,keyID) {
    const response = await bookingService.insert(fullname,email, address,doctorId ,keyID)
    if (response) {
      return res.status(200).json(response);
    }

    return res.status(500).json({ message: "server error !!!" });
  }

  return res.status(401).json({ message: "missing params !!!" });
};
