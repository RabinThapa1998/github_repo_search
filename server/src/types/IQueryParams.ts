import { Request } from "express";

// export type Tsort = "" | "stars" | "forks" | "updated";
// export type Torder = "desc" | "asc";
export interface IQueryParams {
  q: Request["query"]["q"];
  page: Request["query"]["page"];
  per_page: Request["query"]["per_page"];
  order: Request["query"]["order"];
  sort: Request["query"]["sort"];
}
