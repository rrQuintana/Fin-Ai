import { useQuery } from 'react-query';
import { API_URL } from 'logic/envs';
import { BudgetItem } from 'mocks/butget';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'budgets';

export const useFinOneBudget = (query: Record<string, any>) => {
  return useQuery(['budget', query], async () => {
    const response = await axiosInstance.get(`${API_URL}/${baseUrl}`, { params: query });
    const budgetItems = response.data as BudgetItem[];
    return budgetItems.length > 0 ? budgetItems[0] : null;
  });
};
