import type { Shapes, Sizes } from './common'

export interface DrawerProps extends Shapes, Sizes {
  isOpen: boolean;
  backdrop?: 'opaque' | 'blur' | 'transparent';
  placement?: 'top' | 'bottom' | 'right' | 'left';
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
