import User from "../models/user.model.js";
import pool from "../config/db.js";

export const existsByEmail = async (email) => {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email],
  );

  return rows.length ? true : false;
};

export const existsByUsername = async (username) => {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE username = ? LIMIT 1",
    [username],
  );

  return rows.length ? true : false;
};

export const findByUsername = async (username) => {
  const [rows] = await pool.query(
    "SELECT * FROM users WHERE username = ? LIMIT 1",
    [username],
  );
  return rows.length ? rows[0] : false;
};

export const save = async (userData) => {
  const [res] = await pool.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [userData.email, userData.password, userData.username],
  );
  return new User({
    id: res.insertId,
    email: userData.email,
    username: userData.username,
    password: userData.password,
  });
};
