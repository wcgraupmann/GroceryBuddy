/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/logo-color.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
