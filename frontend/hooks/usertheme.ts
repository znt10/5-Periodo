import { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/authStore';

export function useTheme() {
  const theme = useAuthStore((state) => state.theme);
  const setTheme = useAuthStore((state) => state.setTheme);
  const [mounted, setMounted] = useState(false);

  // Só libera o tema após o componente "montar" no navegador
  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    theme: mounted ? theme : 'Dark Blue', // Fallback para o servidor
    setTheme,
    isDark: mounted ? theme === 'Dark Blue' : true,
    mounted
  };
}