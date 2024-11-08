/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.tsx", "./pages/*.tsx"],
  theme: {
    extend: {
      colors: {
        WaTou: "#1C759E",
      },
    },
  },
  plugins: [],
};
