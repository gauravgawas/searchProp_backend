import express from "express";
import * as general from "../controllers/general.controller.js";
const router = express.Router();

router.post("/health", general.health);

export default router;
