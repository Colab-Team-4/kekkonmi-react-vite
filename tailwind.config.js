/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      playFair: ["Playfair Display", "serif"],
    },
    extend: {
      fill: (theme) => ({
        ...theme("colors"),
      }),
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
