export type Tsort = '' | 'stars' | 'forks' | 'updated';
export type Torder = 'desc' | 'asc';
export interface IQueryParams {
  query: string;
  page: number;
  per_page: number;
  order: Torder;
  sort: Tsort;
}
