/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true,
      padding: '30px',

    },
    extend: {
      colors: {
        green: '#22c55e',
        secondary: '#64748b',
        dark: '#1e293b'
      },
      screens: {
        '2xl' : '1320px',
      },
    },
    dropShadow: {
      '3xl': '0 10px 15px #f8fafc',
    }
  },
  plugins: [],
}


