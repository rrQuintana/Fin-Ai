import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';

const baseUrl = 'debit-accounts';

export const useGetDebitAccounts = (query: Record<string, any> = {}) => {
  return useQuery(['debitAccounts', query], async () => {
    const response = await axios.get(`${API_URL}/${baseUrl}`, { params: query });
    return response.data as DebitAccountInterface[];
  });
};
