/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee-dark': '#2C1810',
        'coffee-medium': '#5D4037',
        'coffee-light': '#8D6E63',
        'cream': '#F5F5F5',
      },
      fontFamily: {
        'primary': ['Playfair Display', 'serif'],
        'secondary': ['Poppins', 'sans-serif'],
      },
      spacing: {
        'xl': '4rem',
        'lg': '2rem',
        'md': '1rem',
        'sm': '0.5rem',
      },
    },
  },
  plugins: [],
} 