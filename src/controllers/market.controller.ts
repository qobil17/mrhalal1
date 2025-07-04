import { Request, Response } from "express";
import { T } from "../libs/types/common";

const marketController: T = {};

marketController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome");
  }
};

export default marketController;
