import { Router } from "express";
import { getHtml, postHtml } from "../controllers/htmlWire.js";

const router = Router();

router.get("/", getHtml);
router.post("/", postHtml);

export default router;
