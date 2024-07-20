/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#fda218"
      },
      fontFamily: {
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
