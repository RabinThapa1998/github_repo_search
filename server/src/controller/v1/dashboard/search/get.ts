import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { request } from "../../../../utils/request";
import { IQueryResult } from "../../../../types/IQueryResult";

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
    }).then((res) => res.data as IQueryResult);

    res.status(200).json({
      total_count: search_result.total_count,
      incomplete_results: search_result.incomplete_results,
      items: search_result.items.map((item) => ({
        key: item.id,
        name: item.name,
        author: item.owner.login,
        number_of_stars: item.stargazers_count,
        watchers: item.watchers_count,
        forks: item.forks_count,
        description: item.description || "N/A",
        updated_at: new Date(item.pushed_at).toLocaleDateString(),
      })),
    });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create set. Debug Backend!"
    );
  }
};
