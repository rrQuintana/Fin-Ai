import { useMutation } from 'react-query';
import { API_URL } from 'logic/envs';
import { CreditCardInterface } from '@interfaces/CreditCardInterface';
import { axiosInstance } from '@hooks/axiosConfig';

export const useEditCreditCard = () => {
  return useMutation(async ({ id, updatedCard }: { id: string; updatedCard: Partial<CreditCardInterface> }) => {
    const response = await axiosInstance.put(`${API_URL}/credit-cards/${id}`, updatedCard);
    return response.data;
  });
};
