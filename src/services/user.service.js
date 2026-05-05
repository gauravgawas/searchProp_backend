import * as userRepo from "../repositories/user.repository.js";
import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUNDS, 10) || 10;
  return await bcrypt.hash(password, saltRounds);
};

export const registerUser = async (userData) => {
  if (await userRepo.existsByEmail(userData.email)) {
    throw new Error("Email already exists");
  }
  if (await userRepo.existsByUsername(userData.username)) {
    throw new Error("Username already exists");
  }

  const hashedPassword = await hashPassword(userData.password);
  const user = await userRepo.save({ ...userData, password: hashedPassword });
  return user;
};

export const loginUser = async (userData) => {
  const user = await userRepo.findByUsername(userData.username);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(userData.password, user.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  return user;
};
