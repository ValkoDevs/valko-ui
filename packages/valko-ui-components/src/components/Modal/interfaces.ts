import Sizes from '@/types/sizes'
import Shapes from '@/types/shapes'

export interface ModalProps extends Shapes {
  isOpen: boolean;
  size?: Sizes['size'] | 'full';
  backdrop?: 'opaque' | 'blur' | 'transparent';
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
