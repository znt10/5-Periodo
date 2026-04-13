const API_URL = 'http://127.0.0.1:8000';

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.detail || 'Erro na requisição');
  }

  return data;
};

