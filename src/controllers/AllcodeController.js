import * as allcodeService from "..//services//allcodeService";
export const handleGetAllcode = async (req, res) => {
  const { typeID } = req.params;

  if (typeID) {
    const response = await allcodeService.getAllcodeByType(typeID);
    return response
      ? res.status(200).json(response)
      : res.status(500).json({ message: "server error!!!" });
  }

  return res.status(401).json({ message: "missing param !!!" });
};

