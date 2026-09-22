/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
    theme: {
    extend: {
      fontFamily: {
        sans: ['"Cabin"', "Georgia", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#556B2F",
          dark: "#445323",
          soft: "#EEF2E6",
          mist: "#f7f7f4",
        },
      },
    },
  },
  plugins: [],
}

