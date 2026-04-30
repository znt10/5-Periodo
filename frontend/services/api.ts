const API_URL = 'http://localhost:8000';

function getAccessToken(): string {
  if (typeof document === 'undefined') return '';

  const value = `; ${document.cookie}`;
  const parts = value.split(`; access_token=`);

  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || '';
  }

  return '';
}

export const apiFetch = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const { headers: optionHeaders, ...restOptions } = options;

  const res = await fetch(`${API_URL}${endpoint}`, {
    credentials: 'include', // 🔥 ESSENCIAL
    ...restOptions,
    headers: {
      'Content-Type': 'application/json',
      ...optionHeaders,
      'X-CSRFToken': getAccessToken(),
    },
  });

  let data = {};

  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    throw new Error((data as any)?.detail || 'Erro na requisição');
  }

  return data;
};

export const apiV1 = (endpoint: string, options?: RequestInit) => {
  return apiFetch(`/api/v1${endpoint}`, options);
};