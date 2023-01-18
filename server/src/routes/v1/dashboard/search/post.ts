import Router from "express";
import { postSearchQueryhandler } from "../../../../controller/v1/dashboard/search/post";
const router = Router();

router.post("/", postSearchQueryhandler);
export { router as postSearchRouter };
