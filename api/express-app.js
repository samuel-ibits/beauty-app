import express from "express";
import cors from "cors";
import { client } from "./src/api/client.js";
import { routes } from "./src/api/route.js";

import HandleErrors from "./src/utils/error-handler.js";

export const expressApp = async (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: "*" }));

  //api
  client(app);
  routes(app);


  // error handling
  app.use(HandleErrors);
};
