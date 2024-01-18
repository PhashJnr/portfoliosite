/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#101111",
      frontend: "#186F65",
      proBtnText: "#fff",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

export default config;
