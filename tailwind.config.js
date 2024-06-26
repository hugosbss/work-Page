/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Garanta que todos os arquivos relevantes sejam incluídos
  ],
  theme: {
    extend: {
      colors: { 'custom-dark': '#030712' ,},
      columns: {
        '4xs': '14rem',
      },
    },
  },
  plugins: [],
}
