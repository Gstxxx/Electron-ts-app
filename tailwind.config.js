/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        synthwave: {
          // Bright magenta from the sky
          magenta: '#FF00FF',
          // Deep purple from the mountains
          purple: '#2D1B69',
          // Light purple from the fog
          'purple-light': '#9D4EDD',
          // Dark purple from shadows
          'purple-dark': '#1A103F',
          // Pink gradient color
          pink: '#FF1B6B',
        }
      }
    }
  },
  plugins: [],
}

