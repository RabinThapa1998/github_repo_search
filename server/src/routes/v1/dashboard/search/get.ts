import Router from "express";
import { query } from "express-validator";
import { getSearchHandler } from "../../../../controller/v1/dashboard/search";
import { validateRequest } from "../../../../common/middlewares";

const router = Router();
const validateFields = [
  query("q").not().isEmpty().withMessage("query cannot be empty"),
];

router.get("/", validateFields, validateRequest, getSearchHandler);
export { router as getSearchRouter };
