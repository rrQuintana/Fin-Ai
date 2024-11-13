import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';

export const useDeleteCreditCard = () => {
  return useMutation(async (id: string) => {
    const response = await axios.delete(`${API_URL}/credit-cards/${id}`);
    return response.data;
  });
};
