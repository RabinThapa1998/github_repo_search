import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { request } from "../../../../services/request";
import { IRepos, IUsers } from "../../../../types";

export const getUserHandler = async (req: Request, res: Response) => {
  try {
    const { owner_name, repo_name } = req.query;
    const results = await Promise.all([
      request({
        url: `/repos/${owner_name}/${repo_name}`,
        method: "GET",
      }).then((res) => res.data as IRepos),
      request({
        url: `/users/${owner_name}`,
        method: "GET",
      }).then((res) => res.data as IUsers),
    ]);

    res.status(200).json({
      id: results[0]?.id || "N/A",
      owner_name: results[1]?.name || "N/A",
      repository_name: results[0]?.name || "N/A",
      number_of_issues: results[0]?.open_issues_count ?? "N/A",
      default_branch: results[0]?.default_branch || "N/A",
    });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create set. Debug Backend!"
    );
  }
};
