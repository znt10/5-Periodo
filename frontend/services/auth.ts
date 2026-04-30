import { apiFetch, apiV1 } from './api';

// 🔹 LOGIN
export const login = async (email: string, password: string) => {
  return await apiFetch('/login/', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

// 🔹 USUÁRIO ATUAL
export const getCurrentUser = async () => {
  return await apiV1('/user/me/', {
    method: 'GET',
  });
};

// 🔹 LOGOUT
export const logout = async () => {
  try {
    const response = await apiFetch('/logout/', {
      method: 'POST',
      // CRITICAL: Garante que os cookies HttpOnly sejam enviados na requisição
      credentials: 'include', 
    });

    if (response) {
      // Limpe o estado global do seu app (ex: Zustand, Redux ou Context)
      // useAuthStore.getState().logout(); 
      
      // Opcional: Redirecionar para login
      window.location.href = '/';
    }

    return response;
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    throw error;
  }
};
// 🔹 REGISTER
export const register = async (
  first_name: string,
  email: string,
  password: string,
  tipo_usuario: string,
  id_loja?: number | string
) => {
  return await apiV1('/user/registrar/', {
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

// 🔹 LOJAS
export const getLoja = async () => {
  return await apiV1('/lojas/', {
    method: 'GET',
  });
};

// 🔹 PRODUTOS

export const getProdutos = async () => {
  return await apiV1('/produtos/', {
    method: 'GET',
  });
};

// 🔹 TIPOS
export type ItemPedido = {
  produto: number;
  quantidade: number;
};

export type PedidoData = {
  loja: number;
  descricao: string;
  itens: ItemPedido[];
};

// 🔹 PEDIDO
export const postPedido = async (pedidoData: PedidoData) => {
  return await apiV1('/pedidos/', {
    method: 'POST',
    body: JSON.stringify(pedidoData),
  });
};

// 🔹 RELATÓRIO (PDF)
export const getRelatorio = async () => {
  const res = await fetch(`http://localhost:8000/gerar_pdf/`, {
    method: 'GET',
    credentials: 'include', // 🔥 necessário pro cookie
  });

  if (!res.ok) {
    throw new Error('Erro ao gerar PDF');
  }

  return await res.blob();
};