import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { BudgetItem } from 'mocks/butget';

const baseUrl = 'budgets';

export const useFinOneBudget = (query: Record<string, any>) => {
  return useQuery(['budget', query], async () => {
    const response = await axios.get(`${API_URL}/${baseUrl}`, { params: query });
    const budgetItems = response.data as BudgetItem[];
    return budgetItems.length > 0 ? budgetItems[0] : null;
  });
};
