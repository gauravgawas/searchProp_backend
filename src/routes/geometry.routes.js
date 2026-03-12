import express from "express";
import * as geomControllers from "../controllers/geometry.controller.js";
const router = express.Router();

router.post("/saveGeom", geomControllers.saveGeometry);
router.post("/getMyGeom", geomControllers.getMyGeometry);
router.post("/deleteMyGeom", geomControllers.deleteMyGeometry);
router.post("/deleteAllGeom", geomControllers.deleteAllGeometry);
router.get("/getAllGeom", geomControllers.getAllGeometry);

export default router;
