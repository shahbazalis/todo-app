import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use("/todo", todoRoutes);

//MongoDB connection created
const CONNECTION_URL = process.env.MYDBKEY;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`))
  )
  .catch((error) => console.log(error.message));
