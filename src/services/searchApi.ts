import { AxiosError } from 'axios';
import { apiClient } from './apiClient';

export const search = async (searchKeyword: string) => {
  try {
    console.info('calling api');
    const response = await apiClient.get(
      `search-conditions/?name=${searchKeyword}`
    );
    return response.data;
  } catch (e) {
    const err = e as AxiosError<any>;
    alert(err);
  }
};
