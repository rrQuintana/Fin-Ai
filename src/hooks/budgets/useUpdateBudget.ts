import { useMutation } from 'react-query';
import { API_URL } from 'logic/envs';
import { BudgetItem } from 'mocks/butget';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'budgets';

export const useUpdateBudget = () => {
  return useMutation(async ({ id, updatedItem }: { id: string; updatedItem: Partial<BudgetItem> }) => {
    const response = await axiosInstance.put(`${API_URL}/${baseUrl}/${id}`, updatedItem);
    return response.data;
  });
};
