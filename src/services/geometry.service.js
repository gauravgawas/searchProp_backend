import * as geometryRepo from "../repositories/geometry.repository.js";

export const saveGeom = async (geometryData) => {
  let existingGeometries = await geometryRepo.findByUsername(
    geometryData.username,
  );
  if (existingGeometries.length > 0) {
    let data = existingGeometries[0];

    let editedData = {
      id: data.id,
      geom: geometryData.geom,
    };
    await geometryRepo.save(editedData);
  } else {
    await geometryRepo.save(geometryData);
  }
};

export const fetchAllGeom = async () => {
  return await geometryRepo.findAll();
};

export const fetchMyGeom = async (geometryData) => {
  return await geometryRepo.findByUsername(geometryData.username);
};

export const deleteMyGeom = async (geometryData) => {
  await geometryRepo.deleteAllByUsername(geometryData.username);
};

export const deleteAllGeom = async () => {
  await geometryRepo.deleteAll();
};
