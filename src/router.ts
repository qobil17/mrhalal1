import express, { Request, Response } from "express";
const router = express.Router();

/**MEMBER */
router.get("/", (req: Request, res: Response) => {
  res.send("Home Page");
});

/**PRODUCT */

/**ORDER */

export default router;
