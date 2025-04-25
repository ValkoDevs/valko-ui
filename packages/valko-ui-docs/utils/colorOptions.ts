import type { SelectOption, Color } from '#valkoui'

export default [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'accent', label: 'Accent' },
  { value: 'positive', label: 'Positive' },
  { value: 'warning', label: 'Warning' },
  { value: 'negative', label: 'Negative' }
] as SelectOption<Color>[]
