import express from "express";
require("dotenv").config();
import { dbConnect } from "./utils/dbConnect";
const app = express();
const cors = require("cors");

// Connect to MongoDB
dbConnect();

app.use(cors());
app.use(express.json());

app.use("/", require("./router"));

app.listen(process.env.PORT, (): void => {
  console.log(`Server started on port ${process.env.PORT}`);
});
