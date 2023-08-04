/* eslint-disable */
const colors = require('tailwindcss/colors')

module.exports = () => ({
  darkMode: 'class',
  content: [
    './**/*.{js, vue, ts, html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
        secondary: colors.slate,
        error: colors.red,
        success: colors.green,
        warning: colors.orange,
        info: colors.blue,
        dark: {
          1: colors.slate[600],
          2: colors.slate[700],
          3: colors.slate[800],
          4: colors.slate[900],
          5: colors.slate[950]
        },
        light: {
          1: colors.slate[50],
          2: colors.slate[100],
          3: colors.slate[200],
          4: colors.slate[300],
          5: colors.slate[400]
        },
      }
    }
  },
  plugins: [],
})
