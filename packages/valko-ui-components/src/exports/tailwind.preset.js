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
