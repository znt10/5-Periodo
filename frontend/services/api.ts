// Você está acessando o front em http://localhost:3000 e chamando http://127.0.0.1:8000. Mesmo sendo a mesma máquina,
// localhost e 127.0.0.1 são origens diferentes pro browser. O cookie de sessão setado pelo Django em 127.0.0.1 não é enviado quando a origem é
const API_URL = 'http://localhost:1503'; 

function getCsrfToken(): string {
  if (typeof document === 'undefined') return '';
  const value = `; ${document.cookie}`;
  const parts = value.split(`; csrftoken=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || '';
  
  console.warn('⚠️ csrftoken não encontrado nos cookies!'); // log temporário
  return '';
}

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const { headers: optionHeaders, ...restOptions } = options; // separa os headers do resto

  const res = await fetch(`${API_URL}${endpoint}`, {
    credentials: 'include',
    ...restOptions, // spread sem o headers
    headers: {
      'Content-Type': 'application/json',
      ...optionHeaders, // headers do options
      'X-CSRFToken': getCsrfToken(), // sempre por último pra garantir
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data?.detail || 'Erro na requisição');
  }

  return data;
};

export const apiV1 = async (endpoint: string, options: RequestInit = {}) => {
  
  return apiFetch (`/api/v1${endpoint}`, options);
};