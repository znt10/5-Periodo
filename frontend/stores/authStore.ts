import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  user: any;
  theme: 'Claro' | 'Dark Blue'; // Tipagem para evitar erros
  setUser: (user: any) => void;
  setTheme: (theme: 'Claro' | 'Dark Blue') => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      theme: 'Dark Blue', // Valor inicial
      setUser: (user) => set({ user }),
      setTheme: (theme) => set({ theme }),
    }),
    { name: 'auth-storage' } // Chave no LocalStorage
  )
);