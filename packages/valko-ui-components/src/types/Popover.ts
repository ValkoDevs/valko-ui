import type { Shapes } from './common'

export interface PopoverProps extends Shapes {
  text?: string;
  isOpen?: boolean;
  flat?: boolean;
  condensed?: boolean;
  panelClasses?: string | string[];
}
