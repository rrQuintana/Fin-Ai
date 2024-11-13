import { useMutation } from 'react-query';
import { API_URL } from 'logic/envs';
import { CreditCardInterface } from '@interfaces/CreditCardInterface';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'credit-cards';

export const useCreateCreditCard = () => {
  return useMutation(async (newCard: CreditCardInterface) => {
    const response = await axiosInstance.post(`${API_URL}/${baseUrl}`, newCard);
    return response.data;
  });
};
