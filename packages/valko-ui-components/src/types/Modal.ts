import type { Shapes, SizeWithFull, Backdrop, AriaAttributes } from './common'
import type { ModalSlots } from '../styles/Modal.styles'

export interface ModalProps extends Shapes, Pick<AriaAttributes, 'aria-labelledby' | 'aria-description'> {
  isOpen: boolean;
  size?: SizeWithFull;
  backdrop?: Backdrop;
  title?: string;
  closable?: boolean;
  styleSlots?: Partial<ModalSlots>;
}
