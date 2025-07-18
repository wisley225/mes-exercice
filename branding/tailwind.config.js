/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html" ,"./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
          "blue":"#219ebc",
      }
    },
  },
  plugins: [],
}