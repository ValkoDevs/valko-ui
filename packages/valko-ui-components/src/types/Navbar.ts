import type { Color, Shapes, Variants, Sizes } from '#valkoui'

export interface NavbarProps extends Sizes, Shapes, Variants {
  color?: Color | 'neutral';
  fixed?: boolean;
  floating?: boolean;
  flat?: boolean;
}
