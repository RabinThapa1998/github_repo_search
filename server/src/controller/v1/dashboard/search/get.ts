import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { request } from "../../../../services/request";

export const getSearchHandler = async (req: Request, res: Response) => {
  try {
    const { q, page, per_page, order, sort } = req.query;
    const search_result = await request({
      method: "GET",
      url: "/search/repositories",
      params: {
        q,
        page,
        per_page,
        order,
        sort,
      },
    });

    res.status(200).json(search_result.data);
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create set. Debug Backend!"
    );
  }
};
