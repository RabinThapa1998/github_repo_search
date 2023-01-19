import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";

import { searchHelper } from "../../../../helpers";

export const getSearchHandler = async (req: Request, res: Response) => {
  try {
    const { q, page, per_page, order, sort } = req.query;
    const search_result = await searchHelper({
      q,
      page,
      per_page,
      order,
      sort,
    });

    res.status(200).json(search_result);
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create set. Debug Backend!"
    );
  }
};
