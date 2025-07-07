import type { Shapes, SizeWithFull, Backdrop } from './common'

export interface ModalProps extends Shapes {
  isOpen: boolean;
  size?: SizeWithFull;
  backdrop?: Backdrop;
  title?: string;
  closable?: boolean;
  'aria-labelledby'?: string;
  'aria-description'?: string;
}
