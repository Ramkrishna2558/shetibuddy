/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#4CAF50',
        'sub': '#A1887F',
        'accent': '#FF9800',
        'addon': '#2196F3',
        'success': '#8BC34A',
        'warning': '#FFC107',
        'danger': '#F44336',
      },
    },
  },
  plugins: [],
}