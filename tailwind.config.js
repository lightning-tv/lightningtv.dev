/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'lightningtv': '#6F45E8',
        'lightningtv-dark': '#1C64F2',
      }
    },
  },
  plugins: [],
}