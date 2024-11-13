import { useQuery } from 'react-query';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'debit-accounts';

export const useGetDebitAccounts = (query: Record<string, any> = {}) => {
  return useQuery(['debitAccounts', query], async () => {
    const response = await axiosInstance.get(`${API_URL}/${baseUrl}`, { params: query });
    return response.data as DebitAccountInterface[];
  });
};
