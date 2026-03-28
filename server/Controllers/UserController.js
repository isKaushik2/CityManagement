import User from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

export const getProfile = async (req, res) => {
  try {
    const { token } = req.cookies;
    const user = jwt.verify(token, process.env.JWT_SECRET);

    const userInfo = await User.findById(user.id).select(["-__v"]);
    return res.status(200).json(userInfo);
  } catch (err) {
    return res.status(400).json(err);
  }
};