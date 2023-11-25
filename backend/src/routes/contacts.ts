import { Router, Request, Response } from "express";
const router = Router();
import validator from "validator";

import Contacts from "../controllers/contacts";

router.get("/", async (req: Request, res: Response) => {
  const email = req.query.email as string;

  if (!email) {
    return res.send({ status: false, message: "Email is required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ status: false, message: "Email is invalid" });
  }

  const data = Contacts.find({ email, ...req.query });

  setTimeout(() => {
    res.send({ status: true, data });
  }, 5000);
});

module.exports = router;
