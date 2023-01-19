import Router from "express";
import { getSearchHandler } from "../../../../controller/v1/dashboard/search";

const router = Router();

router.get("/", getSearchHandler);
export { router as getSearchRouter };
