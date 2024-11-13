import { useMutation } from 'react-query';
import { BudgetItem } from 'mocks/butget';
import { API_URL } from 'logic/envs';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'budgets';

export const useCreateBudget = () => {
  return useMutation(async (newItem: BudgetItem) => {
    const response = await axiosInstance.post(`${API_URL}/${baseUrl}`, newItem);
    return response.data;
  });
};

