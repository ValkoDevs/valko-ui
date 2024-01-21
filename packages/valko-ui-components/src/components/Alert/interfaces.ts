import Sizes from '@/types/sizes'
import Variants from '@/types/variants'
import Colors from '@/types/colors'
import Shapes from '@/types/shapes'

export interface AlertProps extends Sizes, Variants, Colors, Shapes {
  icon?: string | null;
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
