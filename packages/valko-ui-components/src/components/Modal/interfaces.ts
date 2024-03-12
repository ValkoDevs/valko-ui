import Sizes from '#valkoui/types/sizes'
import Shapes from '#valkoui/types/shapes'

export interface ModalProps extends Shapes {
  isOpen: boolean;
  size?: Sizes['size'] | 'full';
  backdrop?: 'opaque' | 'blur' | 'transparent';
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
