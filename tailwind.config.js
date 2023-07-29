/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        lightestBlue: "#F6F8FF",
        slateBlue: "#697C9A",
        steelBlue: "#4B6A9B",
        electricBlue: "#0079FF",
        electricBlueHover: "#60ABFF",
        midnightBlue: "#2B3442",

        // Dark Mode Colors
        deepIndigo: '#1E2A47',
        navy: '#141D2F'
      },
      fontSize: {
        "2.2xl": "1.625rem"
      }
    },
  },
  plugins: [],
}

