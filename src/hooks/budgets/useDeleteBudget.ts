import { useMutation } from 'react-query';
import { API_URL } from 'logic/envs';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'budgets';

export const useDeleteBudget = () => {
  return useMutation(async (id: string) => {
    const response = await axiosInstance.delete(`${API_URL}/${baseUrl}/${id}`);
    return response.data;
  });
};
