/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:"class",
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#ebdfd5',
        accent: '#6488b4',
        dark: '#121212',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      rotate:{
        '25':'25deg',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
