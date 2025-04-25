// style types
export type BaseStyles = string
export type SlotStyles = Record<string, string>

// data types
export type Sort = { field: string; direction?: 'asc' | 'desc'; }
export type Filter = { field: string; value: string; }
export interface Pagination<T> { records: T[]; total: number; limit: number; offset: number; }

// prop types
export type LabelPosition = 'left' | 'right'
export type Backdrop = 'opaque' | 'blur' | 'transparent'
export type Placement = 'top' | 'bottom' | 'right' | 'left'
export type PlacementWithAuto = Placement | 'auto'
export type Alignment = 'start' | 'center' | 'end'
export type Corner = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
export type Shape = 'rounded' | 'square' | 'soft'
export type ShapeWithLine = Shape | 'line'
export type Variant = 'filled' | 'outlined' | 'ghost'
export type VariantWithGradient = Variant | 'gradient'
export type VariantWithLink = Variant | 'link'
export type VariantWithLine = Variant | 'line'
export type VariantWithGradientAndLink = VariantWithGradient | VariantWithLink
export type VariantWithGradientAndLine = VariantWithGradient | VariantWithLine
export type VariantWithGradientLinkAndLine = VariantWithGradientAndLine | VariantWithLink
export type Size = 'xs' | 'sm' | 'md' | 'lg'
export type SizeWithFull = Size | 'full'
export type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'positive'
  | 'warning'
  | 'negative'

export interface Shapes { shape?: Shape; }
export interface Variants { variant?: Variant; }
export interface Sizes { size?: Size; }
export interface Colors { color?: Color; }
export interface VariantsAlt { variant?: VariantWithGradient; }
export interface Alignments { alignment?: Alignment; }
export interface Placements { placement?: Placement; }
export interface PlacementsWithAuto { placement?: PlacementWithAuto; }
export interface DefaultComponent extends Shapes, Variants, Colors, Sizes { }
