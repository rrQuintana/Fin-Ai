import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';

export const useGetAllDebitAccounts = (query: Record<string, any> = {}) => {
  return useQuery(['creditCards', query], async () => {
    const response = await axios.get(`${API_URL}/debit-accounts`, { params: query });
    return response.data as DebitAccountInterface[];
  });
};
