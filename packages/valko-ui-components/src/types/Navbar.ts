import type { ColorsWithSurface, Shapes, VariantsAlt, Sizes, AriaAttributes } from './common'

export interface NavbarProps extends Sizes, Shapes, VariantsAlt, ColorsWithSurface, Pick<AriaAttributes, 'aria-label'> {
  fixed?: boolean;
  floating?: boolean;
  elevated?: boolean;
  vertical?: boolean;
}
