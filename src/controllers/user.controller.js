import * as userServices from "../services/user.service.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res, next) => {
  try {
    const userDTO = new User(req.body);
    const user = await userServices.registerUser(userDTO);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const userDTO = new User(req.body);
    const user = await userServices.loginUser(userDTO);
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN },
    );

    res.status(200).json({ userId: user.id, username: user.username, token });
  } catch (error) {
    next(error);
  }
};
