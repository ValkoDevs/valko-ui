/** @type {import('tailwindcss').Config} */
import ValkoUI from '@valko-ui/components/tailwind.preset'
import defaultTheme from 'tailwindcss/defaultTheme'

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
    extend: {
      fontFamily: {
        'serif': ['"Crimson Pro"', ...defaultTheme.fontFamily.serif],
        'sans': ['"Instrument Sans"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
