/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        kufi: ["'Noto Kufi Arabic'", "sans-serif"],
        amiri: ["'Amiri'", "serif"],
        tajawal: ["'Tajawal'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
