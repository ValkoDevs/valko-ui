import type { Shapes, Placement } from './common'

export interface PopoverProps extends Shapes {
  text?: string;
  isOpen?: boolean;
  placement?: Placement;
  flat?: boolean;
  panelClasses?: string | string[];
}
