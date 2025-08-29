import type { ColorsWithSurface, Shapes, VariantsAlt, Sizes, AriaAttributes } from './common'
import type { NavbarSlots } from '../styles/Navbar.styles'

export interface NavbarProps extends Sizes, Shapes, VariantsAlt, ColorsWithSurface, Pick<AriaAttributes, 'aria-label'> {
  fixed?: boolean;
  floating?: boolean;
  elevated?: boolean;
  vertical?: boolean;
  styleSlots?: Partial<NavbarSlots>;
}
