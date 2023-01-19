import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";

import { userHelper } from "../../../../helpers";

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const { owner_name, repo_name } = req.query;
    const results = await userHelper({ owner_name, repo_name });
    res.status(200).json(results);
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create set. Debug Backend!"
    );
  }
};
