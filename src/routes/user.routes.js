import express from "express";
import * as userControllers from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", userControllers.registerUser);
router.post("/login", userControllers.loginUser);
router.post("/payment", userControllers.payment);

export default router;
