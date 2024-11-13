/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.tsx", "./pages/*.tsx"],
  theme: {
    extend: {
      colors: {
        finai: "#231f20",
      },
    },
  },
  plugins: [],
};
