import { useMutation } from 'react-query';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'debit-accounts';

export const useCreateDebitAccount = () => {
  return useMutation(async (newAccount: DebitAccountInterface) => {
    const response = await axiosInstance.post(`${API_URL}/${baseUrl}`, newAccount);
    return response.data;
  });
};
