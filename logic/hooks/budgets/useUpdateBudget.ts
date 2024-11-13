import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { BudgetItem } from 'mocks/butget';

const baseUrl = 'budgets';

export const useUpdateBudget = () => {
  return useMutation(async ({ id, updatedItem }: { id: string; updatedItem: Partial<BudgetItem> }) => {
    const response = await axios.put(`${API_URL}/${baseUrl}/${id}`, updatedItem);
    return response.data;
  });
};
