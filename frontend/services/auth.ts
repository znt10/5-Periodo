import { apiFetch, apiV1 } from './api';

export const login = async (email: string, password: string) => {
  return apiFetch('/login/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password,
    }),
  });
};
export const getCurrentUser = async () => {
  return apiV1('/user/me/', {
    method: 'GET',
  });
}


export const logout = async () => {
  return apiFetch('/logout/', {
    method: 'POST',
  });
};
 
export const register = async (

  first_name: string,
  email: string,
  password: string,
  tipo_usuario: string,
  id_loja?: number | string
) => {
    return apiV1('/user/registrar/', {
    method: 'POST',
    body: JSON.stringify({
      first_name,
      email,
      password,
      tipo_usuario,
      id_loja: id_loja || null,
    }),
  });
};


export const getRelatorio = async () => {
  // Usamos o fetch nativo para evitar as travas do seu apiFetch customizado
  const response = await fetch("http://127.0.0.1:8000/gerar_pdf/", {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Erro no servidor: ${response.status}`);
  }

  // Aqui está o pulo do gato: pegamos como blob (binário)
  return await response.blob(); 
};