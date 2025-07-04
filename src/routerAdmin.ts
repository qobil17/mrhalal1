import express, { Request, Response } from "express";
const routerAdmin = express.Router();

/**MEMBER */
import marketController from "./controllers/market.controller";

/**Restaurant */
routerAdmin.get("/", marketController.goHome);
// routerAdmin
//   .get("/login", marketController.getLogin)
//   .post("/login", marketController.processLogin);
// routerAdmin
//   .get("/signup", marketController.getSignup)
//   .post(
//     "/signup",
//     makeUploader("members").single("memberImage"),
//     marketController.processSignup
//   );
// routerAdmin.get("/logout", marketController.logout);
// routerAdmin.get("/check-me", marketController.checkAuthSession);
/**Product */
// routerAdmin.get(
//   "/product/all",
//   marketController.verifyRestaurant,
//   marketController.getAllProducts
// );
// routerAdmin.post(
//   "/product/create",
//   marketController.verifyRestaurant,
//   makeUploader("products").array("productImages", 5),
//   marketController.createNewProduct
// );
// routerAdmin.post(
//   "/product/:id",
//   marketController.verifyRestaurant,
//   productController.updateChosenProduct
// );
/**User */
// routerAdmin.get(
//   "/user/all",
//   marketController.verifyRestaurant,
//   marketController.getUsers
// );
// routerAdmin.post(
//   "/user/edit",
//   marketController.verifyRestaurant,
//   marketController.upadateChosenUser
// );

/**PRODUCT */

/**ORDER */

export default routerAdmin;
