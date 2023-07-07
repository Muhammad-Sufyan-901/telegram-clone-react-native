/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./source/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#30a3e5",
      secondary: "#8d4bb1",
      backgroundPrimary: "#1d2633",
      backgroundSecondary: "#252d3a",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
