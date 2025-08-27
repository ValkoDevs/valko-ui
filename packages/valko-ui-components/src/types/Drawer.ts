import type { Shapes, Sizes, Backdrop, Placements, AriaAttributes } from './common'

export interface DrawerProps extends Shapes, Sizes, Placements, Pick<AriaAttributes, 'aria-labelledby' | 'aria-description'> {
  isOpen: boolean;
  backdrop?: Backdrop;
  title?: string;
  closable?: boolean;
  styleSlots?: {
    dialog?: string;
    backdrop?: string;
    container?: string;
    content?: string;
    panel?: string;
    panelChild?: string;
    title?: string;
    closeButton?: string;
    closeIcon?: string;
    slotContent?: string;
  };
}
