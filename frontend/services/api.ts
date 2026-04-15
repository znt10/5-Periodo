const API_URL = 'http://localhost:1503';


export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    credentials: 'include',
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

export const apiV1 = async (endpoint: string, options: RequestInit = {}) => {
  
  return apiFetch(`/api/v1${endpoint}`, options);
};