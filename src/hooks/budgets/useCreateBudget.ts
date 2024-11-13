import { useMutation } from 'react-query';
import axios from 'axios';
import { BudgetItem } from 'mocks/butget';
import { API_URL } from 'logic/envs';

const baseUrl = 'budgets';

export const useCreateBudget = () => {
  return useMutation(async (newItem: BudgetItem) => {
    const response = await axios.post(`${API_URL}/${baseUrl}`, newItem);
    return response.data;
  });
};

