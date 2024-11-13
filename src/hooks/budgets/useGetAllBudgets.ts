import { useQuery } from 'react-query';
import { API_URL } from 'logic/envs';
import { BudgetItem } from 'mocks/butget';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'budgets';

export const useGetBudgets = (query: Record<string, any>) => {
  return useQuery(['budgets', query], async () => {
    const response = await axiosInstance.get(`${API_URL}/${baseUrl}`, { params: query });
    return response.data as BudgetItem[];
  });
};
