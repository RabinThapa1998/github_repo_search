export interface IQueryResult {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export interface Item {
  key: number;
  name: string;
  author: string;
  number_of_stars: number;
  watchers: number;
  forks: number;
  description: null | string;
  updated_at: string;
}
