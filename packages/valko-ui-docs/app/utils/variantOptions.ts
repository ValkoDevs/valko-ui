import type { SelectOption, Variant, VariantWithGradient, VariantWithLink, VariantWithGradientAndLink, VariantWithGradientLinkAndLine, VariantWithGradientAndLine } from '#valkoui'

const general = [
  { value: 'filled', label: 'Filled' },
  { value: 'outlined', label: 'Outlined' },
  { value: 'ghost', label: 'Ghost' }
] as SelectOption<Variant>[]

const withLink = [
  ...general,
  { value: 'link', label: 'Link' }
] as SelectOption<VariantWithLink>[]

const withGradient = [
  ...general,
  { value: 'gradient', label: 'Gradient' }
] as SelectOption<VariantWithGradient>[]

const withGradientAndLink = [
  ...withGradient,
  { value: 'link', label: 'Link' }
] as SelectOption<VariantWithGradientAndLink>[]

const withGradientAndLine = [
  ...withGradient,
  { value: 'line', label: 'Line' }
] as SelectOption<VariantWithGradientAndLine>[]

const withGradientLinkAndLine = [
  ...withGradientAndLink,
  { value: 'line', label: 'Line' }
] as SelectOption<VariantWithGradientLinkAndLine>[]

const variantOptions = {
  general,
  withGradient,
  withLink,
  withGradientAndLink,
  withGradientAndLine,
  withGradientLinkAndLine
}

export default variantOptions
