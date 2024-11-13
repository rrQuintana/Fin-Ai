import { useMutation } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { Reminder } from 'mocks/reminders';

const baseUrl = 'reminders';

export const useEditReminders = () => {
  return useMutation(async ({ id, updatedReminder }: { id: string; updatedReminder: Partial<Reminder> }) => {
    const response = await axios.put(`${API_URL}/${baseUrl}/${id}`, updatedReminder);
    return response.data;
  });
};
