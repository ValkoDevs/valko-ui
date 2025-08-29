import type { Shapes, Sizes, Backdrop, Placements, AriaAttributes } from './common'
import type { DrawerSlots } from '../styles/Drawer.styles'

export interface DrawerProps extends Shapes, Sizes, Placements, Pick<AriaAttributes, 'aria-labelledby' | 'aria-description'> {
  isOpen: boolean;
  backdrop?: Backdrop;
  title?: string;
  closable?: boolean;
  styleSlots?: Partial<DrawerSlots>;
}
