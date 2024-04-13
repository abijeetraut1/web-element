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
        "dark-border": "#2E3D61",

      },
      textColor:{
        "dark-text": "#94A3B8",
      },
      height:{
        "94vh":"94vh"
      }
    },
  },
  plugins: [],
}