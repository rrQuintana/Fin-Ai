import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { CreditCardInterface } from '@interfaces/CreditCardInterface';

export const useEditCreditCard = () => {
  return useMutation(async ({ id, updatedCard }: { id: string; updatedCard: Partial<CreditCardInterface> }) => {
    const response = await axios.put(`${API_URL}/credit-cards/${id}`, updatedCard);
    return response.data;
  });
};
