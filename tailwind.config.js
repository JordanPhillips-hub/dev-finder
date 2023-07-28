/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightestBlue: '#F6F8FF',
      },
      fontSize: {
        '2.2xl': '1.625rem'
      }
    },
  },
  plugins: [],
}

