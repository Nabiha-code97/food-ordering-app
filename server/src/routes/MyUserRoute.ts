import express from "express";
import { createCurrentUser, updateCurrentuser } from "../controllers/MyUserController.ts";
import { jwtCheck, jwtParse } from "../middlewares/auth.ts";
import { validateMyUserRequest } from "../middlewares/validate.ts";

const router = express.Router();

router.post("/",jwtCheck, createCurrentUser);
router.put("/", validateMyUserRequest,jwtCheck, jwtParse, updateCurrentuser);

export default router;