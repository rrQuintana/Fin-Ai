import { useQuery } from 'react-query';
import axios from 'axios';
import { API_URL } from 'logic/envs';
import { Reminder } from 'mocks/reminders';

const baseUrl = 'reminders';

export const useFindOneReminder = (query: Record<string, any>) => {
  return useQuery(['reminder', query], async () => {
    const response = await axios.get(`${API_URL}/${baseUrl}`, { params: query });
    const reminders = response.data as Reminder[];
    return reminders.length > 0 ? reminders[0] : null;
  });
};
