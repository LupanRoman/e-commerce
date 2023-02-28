/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': '#FEF2DC',
        'menu-btn': '#4F846E',
        'banner-bg': '#ecebeb',
        'buy-btn': '#E5C212',
      },
      spacing: {
        '4k': '500px',
      },
    },
    fontWeight: {
      thin: '100',
      light: '300',
      medium: '500',
      headings: '900',

    }
  },
  plugins: [],
};
