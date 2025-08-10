/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        musePink: "#F7C7D4",
        museCoral: "#FABEA8",
        musePeach: "#FFD7C2",
      },
      fontFamily: {
        sans: ['ui-sans-serif','system-ui','-apple-system','Inter','Arial','sans-serif'],
      },
    },
  },
  plugins: [],
};
