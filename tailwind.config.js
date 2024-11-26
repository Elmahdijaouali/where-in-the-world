/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      bgDark: "hsl(207, 26%, 17%)",
      bgElementDrak: "hsl(209, 23%, 22%)",
      white: "#fff",
    },
  },
  plugins: [],
};
