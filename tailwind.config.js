/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "icons-color": "rgba(255,255,255,0.7)",
        "navbar-background-color": "#161b22",
        "navbar-input-border-color": "#2c3138",
        "navbar-input-bg-color": "#0d1117",
        "navbar-input-search-text-color": "#b5b2ae",
        "navbar-text-color": "#f0f6fc", 

        "home-left-bg-color": "#0d1117"
      }

    },
  },
  plugins: [],
}
