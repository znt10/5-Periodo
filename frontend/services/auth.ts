import { apiFetch } from './api';

export const login = async (email: string, password: string) => {
  return apiFetch('/login/', {
    method: 'POST',
    body: JSON.stringify({
      email: email, // importante se Django usa username
      password,
    }),
  });
};