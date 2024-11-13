import { useMutation } from 'react-query';
import { API_URL } from 'logic/envs';
import { DebitAccountInterface } from '@interfaces/DebitAccountInterface';
import { axiosInstance } from '@hooks/axiosConfig';

const baseUrl = 'debit-accounts';

export const useUpdateDebitAccount = () => {
  return useMutation(async ({ id, updatedAccount }: { id: string; updatedAccount: Partial<DebitAccountInterface> }) => {
    const response = await axiosInstance.put(`${API_URL}/${baseUrl}/${id}`, updatedAccount);
    return response.data;
  });
};
