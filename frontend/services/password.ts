import { apiFetch } from "./api";

export const changePassword = async (
    email: string,
)=> {
  return apiFetch('/password-reset/', {
    method: 'POST',
    body: JSON.stringify({
        email,

    }),
  });
};


export const resetPassword = async (
    id: string,
    token: string,
    email: string,
    new_password: string,
    confirm_password: string,
)=> {
  return apiFetch('/password-reset-confirm/', {
    method: 'POST',
    body: JSON.stringify({
        id,
        token,
        email,
        new_password,
        confirm_password,

    }),
  });
};