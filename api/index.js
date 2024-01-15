import express from "express";
import { expressApp } from "./express-app.js";
import { connect_db } from "./src/dba/connection.js";
import dotenv from "dotenv";

dotenv.config();

const StartServer = async () => {
  const PORT = "8001";
  const app = express();

  await connect_db();


  await expressApp(app);

  app
    .listen(PORT, () => {
      console.log(`listening to port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
