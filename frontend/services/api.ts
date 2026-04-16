const API_URL = 'http://localhost:1503';


export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const { headers: optionHeaders, ...restOptions } = options; // separa os headers do resto

  const res = await fetch(`${API_URL}${endpoint}`, {
    credentials: 'include',
    ...restOptions, // spread sem o headers
    headers: {
      'Content-Type': 'application/json',
      ...optionHeaders, // headers do options
      //'X-CSRFToken': getCsrfToken(), // sempre por último pra garantir
    },
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
