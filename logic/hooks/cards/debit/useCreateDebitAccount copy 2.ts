import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';

const baseUrl = 'debit-accounts';

export const useUpdateDebitAccount = () => {
  return useMutation(async ({ id, updatedAccount }: { id: string; updatedAccount: Partial<DebitAccountInterface> }) => {
    const response = await axios.put(`${API_URL}/${baseUrl}/${id}`, updatedAccount);
    return response.data;
  });
};
