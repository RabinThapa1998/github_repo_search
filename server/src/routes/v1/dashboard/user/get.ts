import Router from "express";
import { getUserHandler } from "../../../../controller/v1/dashboard/user";
const router = Router();

router.get("/", getUserHandler);
export { router as getUserRouter };
