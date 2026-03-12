import * as userRepo from "../repositories/user.repository.js";

export const registerUser = async (userData) => {
  if (await userRepo.existsByEmail(userData.email)) {
    throw new Error("Email already exists");
  }
  if (await userRepo.existsByUsername(userData.username)) {
    throw new Error("Username already exists");
  }

  const hashedPassword = `hashed_${userData.password}`; // Implement password hashing here
  const user = await userRepo.save({ ...userData, password: hashedPassword });
  return user;
};

export const loginUser = async (userData) => {
  const user = await userRepo.findByUsername(userData.username);

  if (!user) {
    throw new Error("User not found");
  }
  const hashedPassword = `hashed_${userData.password}`;
  if (user.password !== hashedPassword) {
    throw new Error("Invalid password");
  }
  return user;
};
