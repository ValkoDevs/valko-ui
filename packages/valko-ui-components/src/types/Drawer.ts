import type { Shapes } from './common'

export interface DrawerProps extends Shapes {
  isOpen: boolean;
  backdrop?: 'opaque' | 'blur' | 'transparent';
  placement?: 'top' | 'bottom' | 'right' | 'left';
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
