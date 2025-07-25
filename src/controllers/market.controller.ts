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

marketController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error, getLogin");
  }
};

marketController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, getSignup");
  }
};

marketController.processLogin = (req: Request, res: Response) => {
  try {
    res.send("DONE");
  } catch (err) {
    console.log("Error, processLogin");
  }
};

marketController.processSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup DONE");
  } catch (err) {
    console.log("Error, processSignup");
  }
};

export default marketController;
