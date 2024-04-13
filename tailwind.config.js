/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-navigation": "#192237",
        "dark-sliders": "#0F172A",
      }
    },
  },
  plugins: [],
}