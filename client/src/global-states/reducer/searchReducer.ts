import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/global-states/store/store';
import { IQueryParams, IQueryResult } from '~/types';

interface IQueryRes {
  queryResult: IQueryResult | null;
}
interface Error {
  error: string;
}
const initialQueriesState: IQueryParams & IQueryRes & Error = {
  query: '',
  page: 1,
  per_page: 10,
  order: 'desc',
  sort: '',
  queryResult: null,
  error: '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState: initialQueriesState,
  reducers: {
    setQueriesGlobalState: (state, action: PayloadAction<Partial<IQueryParams>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setQueryResultGlobalState: (state, action: PayloadAction<IQueryRes>) => {
      return {
        ...state,
        queryResult: action.payload.queryResult,
      };
    },
    setQueryError: (state, action: PayloadAction<Error>) => {
      return {
        ...state,
        error: action.payload.error,
      };
    },
  },
});

export const { setQueriesGlobalState, setQueryResultGlobalState, setQueryError } =
  querySlice.actions;
export const selectQueryGlobalState = (state: RootState) => state.searchReducer;
export const selectQueryResultGlobalState = (state: RootState) => state.searchReducer.queryResult;
export const selectQueryErrorGlobalState = (state: RootState) => state.searchReducer.error;
export default querySlice.reducer;
