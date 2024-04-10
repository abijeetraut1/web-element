/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-navigation": "#090e10",
        "dark-sliders": "#131b20",
      }
    },
  },
  plugins: [],
}