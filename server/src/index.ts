import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

import connectDB from "./config/db.ts";
import userRoute from "./routes/MyUserRoute.ts"

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/test", (req: Request, res: Response) => {
    res.json({ message: "hello!" });
});

app.use("/api/my/user", userRoute);

app.listen(4000, () => {
    console.log("Server running at port 4000");
});