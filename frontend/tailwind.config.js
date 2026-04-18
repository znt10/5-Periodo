/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 ISSO AQUI FALTAVA
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}