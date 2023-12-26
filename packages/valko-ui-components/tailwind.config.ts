/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js, vue, ts, html}',
    './**/*.{js, vue, ts, html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.rose,
        secondary: colors.slate,
        error: colors.red,
        success: colors.emerald,
        warning: colors.orange,
        info: colors.blue,
        dark: {
          1: colors.gray[600],
          2: colors.gray[700],
          3: colors.gray[800],
          4: colors.gray[900],
          5: colors.gray[950]
        },
        light: {
          1: colors.gray[50],
          2: colors.gray[100],
          3: colors.gray[200],
          4: colors.gray[300],
          5: colors.gray[400]
        },
      }
    }
  },
  plugins: [],
}
