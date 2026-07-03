import express from "express";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middlewares/auth.ts";
import { validateMyRestaurantRequest } from "../middlewares/validate.ts";
import { createMyRestaurant, updateMyRestaurant } from "../controllers/MyRestaurantController.ts";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, 
  },
});

// router.get("/order", jwtCheck, jwtParse, getMyRestaurantOrders );

// router.patch(
//   "/order/:orderId/status",
//   jwtCheck,
//   jwtParse,
//   MyRestaurantController.updateOrderStatus
// );

// router.get("/", jwtCheck, jwtParse, MyRestaurantController.getMyRestaurant);

router.post("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, createMyRestaurant);
router.put("/", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, updateMyRestaurant);


export default router;