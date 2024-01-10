/** @type {import('tailwindcss').Config} */
import ValkoUI from './src/exports/tailwind.preset'

export default {
  presets: [ValkoUI()],
  darkMode: 'class',
  content: [
    './src/**/*.{js, vue, ts, html}',
    './**/*.{js, vue, ts, html}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
