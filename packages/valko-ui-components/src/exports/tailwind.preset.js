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
        primary: colors.violet,
        secondary: colors.slate,
        error: colors.rose,
        success: colors.emerald,
        warning: colors.orange,
        info: colors.blue,
        dark: {
          1: colors.zinc[600],
          2: colors.zinc[700],
          3: colors.zinc[800],
          4: colors.zinc[900],
          5: colors.zinc[950]
        },
        light: {
          1: colors.white,
          2: colors.gray[50],
          3: colors.gray[200],
          4: colors.gray[300],
          5: colors.gray[400]
        },
      },
      backgroundImage: {
        'gradient-striped': 'linear-gradient(125deg,rgba(0,0,0,.1) 10%,transparent 0,transparent 50%,rgba(0,0,0,.1) 0,rgba(0,0,0,.1) 10%,transparent 0,transparent)'
      },
      animation: {
        progress: 'progress 1.5s infinite linear',
        cicle: 'cicle 1s infinite linear'
      },
      keyframes: {
        progress: {
          '0%': { transform:  'translateX(0)', width: '0' },
          '30%': { transform:  'translateX(0)', width: '30%'},
          '70%': { transform:  'translateX(100%)', width: '70%'},
          '100%': { transform:  'translateX(100%)', width: '100%'}
        },
        cicle: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      transformOrigin: {
        'left-right': '0% 50%'
      }
    }
  },
  plugins: [],
})
