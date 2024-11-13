import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';

const baseUrl = 'budgets';

export const useDeleteBudget = () => {
  return useMutation(async (id: string) => {
    const response = await axios.delete(`${API_URL}/${baseUrl}/${id}`);
    return response.data;
  });
};
