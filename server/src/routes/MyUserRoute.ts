import express from "express";
import { createCurrentUser, getCurrentUser, updateCurrentuser } from "../controllers/MyUserController.js";
import { jwtCheck, jwtParse } from "../middlewares/auth.js";
import { validateMyUserRequest } from "../middlewares/validate.js";

const router = express.Router();

router.get("/",jwtCheck, jwtParse, getCurrentUser);
router.post("/",jwtCheck, createCurrentUser);
router.put("/", validateMyUserRequest,jwtCheck, jwtParse, updateCurrentuser);

export default router;