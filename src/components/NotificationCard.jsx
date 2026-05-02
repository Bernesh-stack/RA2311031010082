function NotificationCard({ notification }) {
  const { Type, Message, Timestamp } = notification;

  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        padding: '12px',
        marginBottom: '8px',
        backgroundColor: '#fafafa',
      }}
    >
      <div style={{ marginBottom: '4px' }}>
        <span
          style={{
            display: 'inline-block',
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '2px 8px',
            borderRadius: '3px',
            fontSize: '12px',
            fontWeight: '600',
            marginRight: '8px',
          }}
        >
          {Type}
        </span>
      </div>
      <div style={{ marginBottom: '8px', fontSize: '14px', color: '#333' }}>
        {Message}
      </div>
      <div style={{ fontSize: '12px', color: '#999' }}>
        {new Date(Timestamp).toLocaleString()}
      </div>
    </div>
  );
}

export default NotificationCard;
