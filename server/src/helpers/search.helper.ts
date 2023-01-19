import { IQueryResult, IQueryParams } from "../types";
import { request } from "../utils/request";

export const searchHelper = async ({
  q,
  page,
  per_page,
  order,
  sort,
}: IQueryParams) => {
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
  return {
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
  };
};
