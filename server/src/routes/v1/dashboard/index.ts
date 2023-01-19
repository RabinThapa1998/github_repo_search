import { Router } from "express";
import { indexSearchRouter } from "./search";
import { indexUserRouter } from "./user";

const router = Router();
router.use("/search", indexSearchRouter);
router.use("/user", indexUserRouter);

export { router as indexDashboardRouter };
