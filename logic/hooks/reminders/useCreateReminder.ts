import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { Reminder } from 'mocks/reminders';

const baseUrl = 'reminders';

export const useCreateReminder = () => {
  return useMutation(async (newReminder: Reminder) => {
    const response = await axios.post(`${API_URL}/${baseUrl}`, newReminder);
    return response.data;
  });
};
