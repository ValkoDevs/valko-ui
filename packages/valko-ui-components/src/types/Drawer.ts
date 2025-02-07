import type { Shapes, Sizes, Backdrop, Placement } from './common'

export interface DrawerProps extends Shapes, Sizes {
  isOpen: boolean;
  backdrop?: Backdrop;
  placement?: Placement;
  title?: string;
  closable?: boolean;
  flat?: boolean;
  class?: string | string[];
}
