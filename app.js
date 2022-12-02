import dotenv from "dotenv";
import express from "express";
import { dataBase } from "./db";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

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
