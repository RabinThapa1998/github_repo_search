import { Router } from "express";
import { indexSearchRouter } from "./search";

const router = Router();
router.use("/search/repositories", indexSearchRouter);

export { router as indexDashboardRouter };
