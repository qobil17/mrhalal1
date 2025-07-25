import express, { Request, Response } from "express";
const routerAdmin = express.Router();

/**MEMBER */
import marketController from "./controllers/market.controller";

/**MARKET */
routerAdmin.get("/", marketController.goHome);

routerAdmin
  .get("/login", marketController.getLogin)
  .post("/login", marketController.processLogin);

routerAdmin
  .get("/signup", marketController.getSignup)
  .post("/signup", marketController.processSignup);

/**Product */

/**User */

export default routerAdmin;
