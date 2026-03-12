import * as geometryService from "../services/geometry.service.js";
import Geometry from "../models/geometry.model.js";

export const saveGeometry = async (req, res, next) => {
  try {
    const geometryDTO = new Geometry(req.body);
    const geometry = await geometryService.saveGeom(geometryDTO);
    res.status(201).json(geometry);
  } catch (error) {
    next(error);
  }
};

export const getMyGeometry = async (req, res, next) => {
  try {
    const geometryDTO = new Geometry(req.body);
    const geometry = await geometryService.fetchMyGeom(geometryDTO);
    res.status(200).json(geometry);
  } catch (error) {
    next(error);
  }
};

export const deleteMyGeometry = async (req, res, next) => {
  try {
    const geometryDTO = new Geometry(req.body);
    const geometry = await geometryService.deleteMyGeom(geometryDTO);
    res.status(200).json({ message: "Geometries deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getAllGeometry = async (req, res, next) => {
  try {
    const geometries = await geometryService.fetchAllGeom();
    res.status(200).json(geometries);
  } catch (error) {
    next(error);
  }
};

export const deleteAllGeometry = async (req, res, next) => {
  try {
    const geometry = await geometryService.deleteAllGeom();
    res.status(200).json({ message: "All geometries deleted successfully" });
  } catch (error) {
    next(error);
  }
};
