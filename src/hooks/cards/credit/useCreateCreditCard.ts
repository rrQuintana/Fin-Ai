import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { CreditCardInterface } from '@interfaces/CreditCardInterface';

const baseUrl = 'credit-cards';

export const useCreateCreditCard = () => {
  return useMutation(async (newCard: CreditCardInterface) => {
    const response = await axios.post(`${API_URL}/${baseUrl}`, newCard);
    return response.data;
  });
};
