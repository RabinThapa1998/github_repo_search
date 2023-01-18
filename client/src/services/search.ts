import { request } from '~/util/request';
import { IQueryParams, IQueryResult } from '~/types';

export const search = {
  getSearchQuery({ sort, order, page, per_page, query }: IQueryParams): Promise<IQueryResult> {
    return request({
      url: `/search/repositories?q=${query}&page=${page}&per_page=${per_page}&order=${order}&sort=${sort}`,
      method: 'GET',
    });
  },
};
