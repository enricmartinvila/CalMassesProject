/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        serif: ['"Fraunces"', "Georgia", "serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#4d5a2a",
          dark: "#2f3819",
          soft: "#e8ebd9",
          mist: "#f7f3ea",
        },
        cream: "#f7f3ea",
        paper: "#fffdf8",
        ink: "#23251b",
        muted: "#6a6c5c",
        wine: "#7a2e3a",
        line: "#ded9c8",
      },
      borderRadius: {
        card: "18px",
      },
    },
  },
  plugins: [],
}
