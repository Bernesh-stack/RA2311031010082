const API_BASE_URL = '/evaluation-service';

function getAuthToken() {
  const storedToken = localStorage.getItem('access_token');
  return storedToken ? storedToken.trim() : '';
}

function buildHeaders() {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function apiCall(endpoint, options = {}) {
  const token = getAuthToken();

  if (!token) {
    console.log('[notifications] access_token missing from localStorage');
    return { notifications: [] };
  }

  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    ...options,
    headers: {
      ...buildHeaders(),
      ...options.headers,
    },
  };

  console.log('[notifications] request', {
    url,
    hasToken: Boolean(token),
    tokenPreview: `${token.slice(0, 12)}...`,
    headers: config.headers,
  });

  let response;

  try {
    response = await fetch(url, config);
  } catch (error) {
    console.error('[notifications] network error', error);
    return { notifications: [] };
  }

  console.log('[notifications] response status', response.status);

  if (!response.ok) {
    if (response.status === 401) {
      console.warn('[notifications] unauthorized response from API');
      return { notifications: [] };
    }

    let message = `API error: ${response.status} ${response.statusText}`;

    try {
      const errorBody = await response.json();
      if (errorBody?.message) {
        message = errorBody.message;
      }
    } catch {
      // Ignore non-JSON error responses.
    }

    console.error('[notifications] api error', message);
    return { notifications: [] };
  }

  return response.json();
}
