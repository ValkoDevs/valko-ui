import type { Color, Shapes, VariantsAlt, Sizes } from './common'

export interface NavbarProps extends Sizes, Shapes, VariantsAlt {
  color?: Color | 'neutral';
  fixed?: boolean;
  floating?: boolean;
  flat?: boolean;
}
