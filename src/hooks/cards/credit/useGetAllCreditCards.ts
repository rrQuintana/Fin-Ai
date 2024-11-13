import { useQuery } from 'react-query';
import { API_URL } from 'logic/envs';
import { CreditCardInterface } from '@interfaces/CreditCardInterface';
import { axiosInstance } from '@hooks/axiosConfig';

export const useGetAllCreditCards = (query: Record<string, any> = {}) => {
  return useQuery(['creditCards', query], async () => {
    const response = await axiosInstance.get(`${API_URL}/credit-cards`, { params: query });
    return response.data as CreditCardInterface[];
  });
};
