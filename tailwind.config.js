/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/src/assets/bg-main.svg')",
      },
      fontFamily: {
        'mukta': ['Mukta Malar'],
      },
      colors: {
        'red-primary': "#cc080b"
      },
    },
  },
  plugins: [],
}
