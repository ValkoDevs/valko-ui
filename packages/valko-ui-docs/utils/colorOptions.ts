import type { SelectOption, Color, ColorWithSurface } from '#valkoui'

const general = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'accent', label: 'Accent' },
  { value: 'positive', label: 'Positive' },
  { value: 'warning', label: 'Warning' },
  { value: 'negative', label: 'Negative' }
] as SelectOption<Color>[]

const withSurface = [
  ...general,
  { value: 'surface', label: 'Surface' }
] as SelectOption<ColorWithSurface>[]

const colorOptions = {
  general,
  withSurface
}

export default colorOptions
