/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "rgba(0,0,0,0)",
      purple: "rgba(75, 105, 253, 1)",
      black: "rgba(0, 0, 0, 1)",
      white: "#FFFFFF",
      orange: "rgba(254, 101, 43, 1)",
      cream: "rgba(255, 249, 235, 1)",
      grey: "rgba(196, 196, 196, 1)"
    },
    extend: {
      boxShadow: {
        custom: "2px 2px 0px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
