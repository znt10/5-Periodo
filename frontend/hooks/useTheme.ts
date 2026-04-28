import { useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/authStore';

export function useTheme() {
  const theme = useAuthStore((state) => state.theme);
  const setTheme = useAuthStore((state) => state.setTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 👇 INJETA O TEMA NO HTML PARA O TAILWIND LER
  useEffect(() => {
    if (mounted) {
      const root = document.documentElement; // Pega a tag <html>
      if (theme === 'Dark Blue') {
        root.setAttribute('data-theme', 'dark-blue');
      } else {
        root.removeAttribute('data-theme');
      }
    }
  }, [theme, mounted]);

  return {
    theme: mounted ? theme : 'Dark Blue',
    setTheme,
    isDark: mounted ? theme === 'Dark Blue' : true,
    mounted
  };
}