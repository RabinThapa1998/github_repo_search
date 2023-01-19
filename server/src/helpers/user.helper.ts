import { IRepos, IUsers } from "../types";
import { request } from "../utils/request";
import { Request } from "express";

export const userHelper = async ({
  owner_name,
  repo_name,
}: {
  owner_name: Request["query"]["owner_name"];
  repo_name: Request["query"]["repo_name"];
}) => {
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
  return {
    id: results[0]?.id || "N/A",
    owner_name: results[1]?.name || "N/A",
    repository_name: results[0]?.name || "N/A",
    number_of_issues: results[0]?.open_issues_count ?? "N/A",
    default_branch: results[0]?.default_branch || "N/A",
  };
};
