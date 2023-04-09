/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        custom: "rgb(22 78 99)"
      },
      backgroundImage: {
        main: "url('../public/images/background.png')",
        blackcircle: "radial-gradient(at center, #ffffff91, #2e2d2d, #000)",
      },
    },
  },
  plugins: [],
}

