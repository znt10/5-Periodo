import { apiFetch } from './api';

export const login = async (email: string, password: string) => {
  return apiFetch('/login/', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password,
    }),
  });
};


export const logout = async () => {
  return apiFetch('/logout/', {
    method: 'POST',
  });
};