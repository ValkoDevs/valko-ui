/** @type {import('tailwindcss').Config} */
import ValkoUI from '@valko-ui/components/tailwind.preset'

export default {
  presets: [ValkoUI()],
  darkMode: 'class',
  content: [
    './src/**/*.vue',
    './src/**/*.ts',
    './src/**/*.js',
    '../valko-ui-components/dist/**/*.{js, vue, ts, html}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
