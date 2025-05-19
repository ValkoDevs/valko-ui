import type { ColorsWithSurface, Shapes, VariantsAlt, Sizes } from './common'

export interface NavbarProps extends Sizes, Shapes, VariantsAlt, ColorsWithSurface {
  fixed?: boolean;
  floating?: boolean;
  elevated?: boolean;
  vertical?: boolean;
}
