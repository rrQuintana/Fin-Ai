import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { CreditCardInterface } from '@interfaces/CreditCardInterface';

export const useGetAllCreditCards = (query: Record<string, any> = {}) => {
  return useQuery(['creditCards', query], async () => {
    const response = await axios.get(`${API_URL}/credit-cards`, { params: query });
    return response.data as CreditCardInterface[];
  });
};
