import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import cors from "cors";
import { connectDB } from "./src/config/dbConnection.js";
import todoRoute from "./src/routes/todoRoute.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/todo", todoRoute);

connectDB();
app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
