/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF7ED',
          200: '#FED7AA',
        },
        green: {
          600: '#16A34A',
          700: '#15803D',
        },
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        'semi-bold': ['600', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

