import Router from "express";
import { getUserHandler } from "../../../../controller/v1/dashboard/user";
import { query } from "express-validator";
import { validateRequest } from "../../../../common/middlewares";

const router = Router();

const validateFields = [
  query("owner_name")
    .not()
    .isEmpty()
    .withMessage("owner name query cannot be empty"),
  query("repo_name")
    .not()
    .isEmpty()
    .withMessage("repo name query cannot be empty"),
];

router.get("/", validateFields, validateRequest, getUserHandler);
export { router as getUserRouter };
