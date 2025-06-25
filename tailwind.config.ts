/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",           // HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // React/JS files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Custom color
        secondary: '#f43f5e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // or 'media' or false
  plugins: [],
}
