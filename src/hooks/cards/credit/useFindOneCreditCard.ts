import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { CreditCardInterface } from '@interfaces/CreditCardInterface';

export const useFindOneCreditCard = (query: Record<string, any>) => {
  return useQuery(['creditCard', query], async () => {
    const response = await axios.get(`${API_URL}/credit-cards`, { params: query });
    const creditCards = response.data as CreditCardInterface[];
    return creditCards.length > 0 ? creditCards[0] : null; 
  });
};
