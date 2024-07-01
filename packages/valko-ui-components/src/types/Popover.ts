import type { Shapes } from './common'

export interface PopoverProps extends Shapes {
  text?: string;
  isOpen?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  flat?: boolean;
}
