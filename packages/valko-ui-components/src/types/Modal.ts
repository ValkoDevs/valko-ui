import type { Shapes, Size } from './common'

export interface ModalProps extends Shapes {
  isOpen: boolean;
  size?: Size | 'full';
  backdrop?: 'opaque' | 'blur' | 'transparent';
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
