import type { Shapes, SizeWithFull, Backdrop, AriaAttributes } from './common'

export interface ModalProps extends Shapes, Pick<AriaAttributes, 'aria-labelledby' | 'aria-description'> {
  isOpen: boolean;
  size?: SizeWithFull;
  backdrop?: Backdrop;
  title?: string;
  closable?: boolean;
}
