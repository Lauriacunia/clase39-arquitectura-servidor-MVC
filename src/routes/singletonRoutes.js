import { Router } from "express";
import { getSingleton } from "../controllers/singleton.js";
const router = Router();

router.get("/", getSingleton);

export default router;
