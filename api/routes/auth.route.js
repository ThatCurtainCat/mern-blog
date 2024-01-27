import expreess from "express";
import { signup } from "../controllers/auth.controller.js";

const router = expreess.Router();

router.post("/signup", signup);

export default router;
