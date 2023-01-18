import { request } from '~/util/request';
import { IQueryParams, IQueryResult, Item, IUsers } from '~/types';

export const search = {
  getSearchQuery({ sort, order, page, per_page, query }: IQueryParams): Promise<IQueryResult> {
    return request({
      url: `/search/repositories?q=${query}&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`,
      method: 'GET',
    });
  },
  getRepos({ ownerName, repoName }: { ownerName: string; repoName: string }): Promise<Item> {
    return request({
      url: `/repos/${ownerName}/${repoName}`,
      method: 'GET',
    });
  },
  getUsers({ ownerName }: { ownerName: string }): Promise<IUsers> {
    return request({
      url: `/users/${ownerName}`,
      method: 'GET',
    });
  },
};
