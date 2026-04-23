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
  tipo_usuario: string
) => {
    return apiV1('/user/registrar/', {
    method: 'POST',
    body: JSON.stringify({
      first_name,
      email,
      password,
      tipo_usuario,
    }),
  });
};
