import { useEffect, useState } from 'react';
import { fetchNotifications } from '../services/notifications';
import { getTopNotifications } from '../utils/priority';
import NotificationList from '../components/NotificationList';

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        setIsLoading(true);
        const data = await fetchNotifications();
        console.log('[notifications] raw data', data);
        const sorted = getTopNotifications(data);
        console.log('[notifications] top 10', sorted);
        setNotifications(sorted);
      } catch (err) {
        console.error('[notifications] load failed', err);
        setNotifications([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadNotifications();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Campus Notifications</h1>
      <NotificationList
        notifications={notifications}
        isLoading={isLoading}
      />
    </div>
  );
}

export default Home;