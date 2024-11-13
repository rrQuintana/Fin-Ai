import { useQuery } from 'react-query';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'debit-accounts';

export const useGetSingleDebitAccount = (query: Record<string, any>) => {
  return useQuery(['debitAccount', query], async () => {
    const response = await axiosInstance.get(`${API_URL}/${baseUrl}`, { params: query });
    const accounts = response.data as DebitAccountInterface[];
    return accounts.length > 0 ? accounts[0] : null;
  });
};
