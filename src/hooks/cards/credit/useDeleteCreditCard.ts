import { useMutation } from 'react-query';
import { API_URL } from 'logic/envs';
import { axiosInstance } from '@hooks/axiosConfig';

export const useDeleteCreditCard = () => {
  return useMutation(async (id: string) => {
    const response = await axiosInstance.delete(`${API_URL}/credit-cards/${id}`);
    return response.data;
  });
};
