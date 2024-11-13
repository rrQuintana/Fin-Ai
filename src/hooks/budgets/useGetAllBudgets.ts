import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { BudgetItem } from 'mocks/butget';

const baseUrl = 'budgets';

export const useGetBudgets = (query: Record<string, any>) => {
  return useQuery(['budgets', query], async () => {
    const response = await axios.get(`${API_URL}/${baseUrl}`, { params: query });
    return response.data as BudgetItem[];
  });
};
