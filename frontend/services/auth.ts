<<<<<<< HEAD
import { apiFetch, apiV1} from './api';
=======
import { apiFetch, apiV1 } from './api';
>>>>>>> 8d519a695ccd984b95c438556d25224953c7df50

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
<<<<<<< HEAD

export const register = async (
=======
 
export const register = async (

>>>>>>> 8d519a695ccd984b95c438556d25224953c7df50
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