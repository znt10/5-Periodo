// tailwind.config.js
const { createThemes } = require('tw-colors'); // Opcional, mas facilita muito

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  // IMPORTANTE: Habilitar o modo escuro por classe ou atributo
  darkMode: ['class', '[data-theme="dark-blue"]'], 
  theme: {
    extend: {
      colors: {
        // Defina nomes semânticos aqui
        // O valor 'rgb(var(--color-base) / <alpha-value>)' permite
        // que o Tailwind também controle a opacidade (ex: bg-base/50)
        'theme-base': 'rgb(var(--color-base) / <alpha-value>)',
        'theme-card': 'rgb(var(--color-card) / <alpha-value>)',
        'theme-header': 'rgb(var(--color-header) / <alpha-value>)',
        'theme-border': 'rgb(var(--color-border) / <alpha-value>)',
        'theme-hover': 'rgb(var(--color-hover) / <alpha-value>)',
        // Suas cores de ação e status continuam as mesmas
        'action-primary': '#2563eb', // blue-600
        'status-success': '#4ade80', // green-400
        // ... outras cores de status
      },
    },
  },
  plugins: [],
}