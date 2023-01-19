import { request } from '~/util/request';
import { IQueryParams, IQueryResult, Item, IUsers } from '~/types';

export const search = {
  getSearchQuery({ sort, order, page, per_page, query }: IQueryParams): Promise<IQueryResult> {
    return request({
      url: `/search?q=${query}&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`,
      method: 'GET',
    });
  },

  getUsers({ ownerName, repoName }: { ownerName: string; repoName: string }): Promise<IUsers> {
    return request({
      url: `/user?owner_name=${ownerName}&repo_name=${repoName}`,
      method: 'GET',
    });
  },
};
