import type { ColorsWithSurface, Shapes, VariantsAlt, Sizes, AriaAttributes } from './common'
import type { NavbarBase } from '../styles/Navbar.styles'

export interface NavbarProps extends Sizes, Shapes, VariantsAlt, ColorsWithSurface, Pick<AriaAttributes, 'ariaLabel'> {
  fixed?: boolean;
  floating?: boolean;
  elevated?: boolean;
  vertical?: boolean;
  styleSlots?: Partial<NavbarBase>;
}
