const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  theme: {
    colors,
    extend: {
      width: {
        artwork: 'min(500px, 90vw)',
        thumbnail: 'calc(calc(min(500px, 90vw) - 20px) / 5)'
      },
      height: {
        artwork: 'calc(min(500px, 90vw) * (1 - 0.05))'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}