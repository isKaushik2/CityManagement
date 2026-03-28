import User from "../Models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { comparePassword, hashPassword } from "../Utils/helper.js";

const lifetime = "3600000";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "Email in use.",
      });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ name, email, password });
    newUser.password = hashedPassword;
    await newUser.save();
    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: lifetime },
    );

    res.cookie("token", token, {
      maxAge: lifetime,
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPassEqual = await comparePassword(password, user.password);
  if (!isPassEqual) {
    return res.status(400).json({
      message: "Wrong password",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: lifetime },
  );

  res.cookie("token", token, {
    maxAge: lifetime,
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
  return res.status(200).json(user);
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
  });
  return res.status(200).json({ message: "Logout successful" });
};
