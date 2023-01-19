import axios from 'axios';
import { BASE_URL } from '~/config';
const API_SECTION = '/api/v1/dashboard';

const client = axios.create({ baseURL: BASE_URL + API_SECTION });

export const request = ({ ...options }) => {
  const onSuccess = (response: any) => {
    return response.data;
  };
  const onError = (error: any) => {
    return error.response.data;
  };
  return client(options).then(onSuccess).catch(onError);
};
