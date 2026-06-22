import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

import connectDB from "./config/db.ts";

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/test", (req: Request, res: Response) => {
    res.json({ message: "hello!" });
});

app.listen(4000, () => {
    console.log("Server running at port 4000");
});