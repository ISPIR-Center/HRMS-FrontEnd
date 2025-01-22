/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your file paths here
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        customBlue: '#005A7A',
        loginBlue: '#0A3C5D',
        headingscolor: '#262626',
        forgotpass: '#5D5F5D',
        colorHR: '#5D5F5D',
        bgtitle: '#f4f4f4',
        bgsearchbar: '#F0F2F5',
        pending: '#F6B935',
        submitted: '#177B0A',
        footertext: '#808080',
      },
      fontSize: {
        footer: '16px',
      },
      fontStyle: {
        italic: 'italic',
      },
      height: {
        '950': '950px'
      },
    },
  },
  plugins: [],
}
