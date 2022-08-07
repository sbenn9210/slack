/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        "1/4": "1 1 25%",
        "1/3": "1 1 33%",
        "1/2": "1 1 50%",
        "2/3": "1 1 67%",
        "3/4": "1 1 75%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
