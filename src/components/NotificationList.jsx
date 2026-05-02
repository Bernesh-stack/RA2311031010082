import NotificationCard from './NotificationCard';

function NotificationList({ notifications, isLoading }) {
  if (isLoading) {
    return <div style={{ padding: '20px', color: '#666' }}>Loading notifications...</div>;
  }

  if (notifications.length === 0) {
    return <div style={{ padding: '20px', color: '#999' }}>No notifications available.</div>;
  }

  return (
    <div>
      {notifications.map((notification) => (
        <NotificationCard key={notification.ID} notification={notification} />
      ))}
    </div>
  );
}

export default NotificationList;
