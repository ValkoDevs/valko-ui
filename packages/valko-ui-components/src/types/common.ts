// style types
export type BaseStyles = string
export type SlotStyles = Record<string, string>

// prop types
export type Shape = 'rounded' | 'square' | 'soft'
export type Variant = 'filled' | 'outlined' | 'ghost'
export type VariantWithGradient = Variant | 'gradient'
export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type Color =
  | 'primary'
  | 'neutral'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'

export interface Shapes { shape?: Shape; }
export interface Variants { variant?: Variant; }
export interface Sizes { size?: Size; }
export interface Colors { color?: Color; }
export interface VariantsAlt { variant?: VariantWithGradient }
export interface DefaultComponent extends Shapes, Variants, Colors, Sizes {}
