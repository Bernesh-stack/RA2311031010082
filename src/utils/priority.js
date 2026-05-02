const PRIORITY_LEVELS = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getPriority(notification) {
  const type = notification.Type || '';
  return PRIORITY_LEVELS[type] || 0;
}

function parseTimestamp(timestamp) {
  if (!timestamp) {
    return 0;
  }

  const normalizedTimestamp = timestamp.includes(' ') ? timestamp.replace(' ', 'T') : timestamp;
  const parsedTime = new Date(normalizedTimestamp).getTime();

  return Number.isNaN(parsedTime) ? 0 : parsedTime;
}

export function getTopNotifications(notifications) {
  if (!Array.isArray(notifications)) {
    return [];
  }

  const sorted = [...notifications].sort((a, b) => {
    const priorityA = getPriority(a);
    const priorityB = getPriority(b);

    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }

    const timeA = parseTimestamp(a.Timestamp);
    const timeB = parseTimestamp(b.Timestamp);
    return timeB - timeA;
  });

  return sorted.slice(0, 10);
}
