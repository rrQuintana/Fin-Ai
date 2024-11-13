import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';

const baseUrl = 'debit-accounts';

export const useCreateDebitAccount = () => {
  return useMutation(async (newAccount: DebitAccountInterface) => {
    const response = await axios.post(`${API_URL}/${baseUrl}`, newAccount);
    return response.data;
  });
};
