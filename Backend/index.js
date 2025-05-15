import cookieParser from "cookie-parser";
import express from "express";
const app = express();
import cors from "cors";
import connectDB from "./utils/db.js";

import dotenv from "dotenv";
dotenv.config({});



app.get("/", (req, res) => {
  return res.status(200).json({
    messsage: "Welcome to the Job Portal API",
    success: true,
  });
});
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origins: ["http://localhost:5173"],
  Credentials: true,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    connectDB();
  console.log(`server is running on port ${PORT}`);
});
