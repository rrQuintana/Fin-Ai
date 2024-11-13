import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { Reminder } from 'mocks/reminders';

const baseUrl = 'reminders';

export const useFinAllReminders = (query: Record<string, any> = {}) => {
  return useQuery(['reminders', query], async () => {
    const response = await axios.get(`${API_URL}/${baseUrl}`, { params: query });
    return response.data as Reminder[];
  });
};
