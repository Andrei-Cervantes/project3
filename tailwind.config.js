/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#35333C",
        secondary: "#1B1925",
        footer: "#1B1925",
      },
    },
  },
  plugins: [],
};
