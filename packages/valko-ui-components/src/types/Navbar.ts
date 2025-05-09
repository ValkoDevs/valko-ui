import type { Colors, Shapes, VariantsAlt, Sizes } from './common'

export interface NavbarProps extends Sizes, Shapes, VariantsAlt, Colors {
  fixed?: boolean;
  floating?: boolean;
  elevated?: boolean;
  vertical?: boolean;
}
