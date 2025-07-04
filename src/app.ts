import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

//TCP databasega bog'lanish

/** 1-ENTRANCE */
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** 2-SESSION */

/** 3-VIEWS */ // ejs ni configuratsia qiladi bu bo'lim
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 4-ROUTERS */
app.use("/", router);
app.use("/admin", routerAdmin);

export default app;
