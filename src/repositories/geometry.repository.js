import Geometry from "../models/geometry.model.js";
import pool from "../config/db.js";

export const save = async (geometryData) => {
  let [res] = [];
  if (geometryData.id) {
    [res] = await pool.query(
      "UPDATE geometry SET geom=? WHERE id=?",
      [geometryData.geom, geometryData.id],
      [geometryData.geom, geometryData.username],
    );
  } else {
    [res] = await pool.query(
      "INSERT INTO geometry (geom, username) VALUES (?, ?)",
      [geometryData.geom, geometryData.username],
    );
  }
  return new Geometry({
    id: res.insertId,
    geom: geometryData.geom,
    username: geometryData.username,
  });
};

export const findByUsername = async (username) => {
  const [rows] = await pool.query("SELECT * FROM geometry WHERE username = ?", [
    username,
  ]);
  return rows;
};

export const findAll = async () => {
  const [rows] = await pool.query("SELECT * FROM geometry");
  return rows;
};

export const deleteAllByUsername = async (username) => {
  await pool.query("DELETE FROM geometry WHERE username=?", [username]);
};

export const deleteAll = async () => {
  await pool.query("DELETE FROM geometry");
};
