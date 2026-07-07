import express from "express";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middlewares/auth.ts";
import { validateMyRestaurantRequest } from "../middlewares/validate.ts";
import { createMyRestaurant, getMyRestaurant, getMyRestaurantOrders, updateMyRestaurant, updateOrderStatus } from "../controllers/MyRestaurantController.ts";


const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, 
  },
});

router.get("/order", jwtCheck, jwtParse, getMyRestaurantOrders );

router.patch(
  "/order/:orderId/status",
  jwtCheck,
  jwtParse,
  updateOrderStatus
);

router.get("/", jwtCheck, jwtParse, getMyRestaurant);

router.post("/", jwtCheck, jwtParse, upload.single("imageFile"), validateMyRestaurantRequest, createMyRestaurant);
router.put("/", jwtCheck, jwtParse, upload.single("imageFile"), validateMyRestaurantRequest, updateMyRestaurant);


export default router;