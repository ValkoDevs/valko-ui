import type { SelectOption, Size, SizeWithFull } from '#valkoui'

const general = [
  { value: 'xs', label: 'Extra Small' },
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' }
] as SelectOption<Size>[]

const withFull = [
  ...general,
  { value: 'full', label: 'Full' }
] as SelectOption<SizeWithFull>[]

const sizeOptions = {
  general,
  withFull
}

export default sizeOptions
