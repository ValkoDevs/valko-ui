import type { Color, Shapes, Variants, Sizes } from '#valkoui/types'

export interface NavbarProps extends Sizes, Shapes, Variants {
  color?: Color | 'neutral';
  fixed?: boolean;
  floating?: boolean;
  flat?: boolean;
}
