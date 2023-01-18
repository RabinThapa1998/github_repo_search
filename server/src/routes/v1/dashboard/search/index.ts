import { Router } from "express";
import { getSearchRouter } from "./get";

const router = Router();
router.use(getSearchRouter);

export { router as indexSearchRouter };
