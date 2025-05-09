import type { Shapes, Sizes, Backdrop, Placements } from './common'

export interface DrawerProps extends Shapes, Sizes, Placements {
  isOpen: boolean;
  backdrop?: Backdrop;
  title?: string;
  closable?: boolean;
  classes?: string | string[];
}
