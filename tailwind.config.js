/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "dark-navigation-bg": "#171717",
        "dark-navigation-drawer-bg": "#171717",
        "dark-sliders-bg": "#212121",
        "dark-button-bg": "#2E3D61",
      },
      textColor: {
        "dark-text-color": "#94A3B8",
      },
      height: {
        "94vh": "94vh"
      },
      borderColor: {
        "dark-border-color": "#2E3D61",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'], // Enable hover variants for border color
      borderRadius: ['hover'], // Enable hover variants for border radius
    },
  },
  plugins: [],
}
