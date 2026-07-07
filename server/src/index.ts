import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db.ts";
import userRoute from "./routes/MyUserRoute.ts"
import myRestaurantRoute from "./routes/MyRestaurantRoute.ts"
import restaurantRoute from "./routes/RestaurantRoute.ts"
import orderRoute from "./routes/OrderRoute.ts";
import { v2 as cloudinary } from "cloudinary";

const app = express();
app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));
app.use(express.json());
app.use(cors());

connectDB();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

app.get("/health", (req: Request, res: Response) => {
    res.json({ message: "health OK!" });
});

app.use("/api/my/user", userRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);
app.use("/api/order", orderRoute);

app.listen(4000, () => {
    console.log("Server running at port 4000");
});
