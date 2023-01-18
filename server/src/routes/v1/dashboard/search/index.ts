import { Router } from "express";
import { postSearchRouter } from "./post";

const router = Router();
router.use(postSearchRouter);

export { router as indexSearchRouter };
