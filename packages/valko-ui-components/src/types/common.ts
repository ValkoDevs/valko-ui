export type Shape = 'rounded' | 'square' | 'soft'
export type Variant = 'filled' | 'outlined' | 'ghost'
export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export interface Shapes { shape?: Shape; }
export interface Variants { variant?: Variant; }
export interface Sizes { size?: Size; }
export interface Colors { color?: Color; }
export interface DefaultComponent extends Shapes, Variants, Colors, Sizes {}
