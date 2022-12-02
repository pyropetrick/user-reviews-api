import dotenv from "dotenv";
import path from "path";
import express from "express";
import { dataBase } from "./db.js";
import router from "./routes/userRoutes";

dotenv.config();
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.resolve(__dirname, "static")));
app.use("/api", router);

const start = async () => {
  try {
    await dataBase.authenticate();
    await dataBase.sync();
    app.listen(PORT, () => {
      console.log("server is started on port: " + PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
