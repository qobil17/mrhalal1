import express from "express";
import path from "path";

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

export default app;
