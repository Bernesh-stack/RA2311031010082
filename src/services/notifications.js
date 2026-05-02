import { apiCall } from '../api/client';

export async function fetchNotifications() {
  const response = await apiCall('/notifications');
  return response.notifications || [];
}
