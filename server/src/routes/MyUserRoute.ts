import express from "express";
import { createCurrentUser } from "../controllers/MyUserController.ts";
import { jwtCheck } from "../middlewares/auth.ts";

const router = express.Router();

router.post("/",jwtCheck, createCurrentUser);

export default router;