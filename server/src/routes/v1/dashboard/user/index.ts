import { Router } from "express";
import { getUserRouter } from "./get";

const router = Router();
router.use(getUserRouter);

export { router as indexUserRouter };
