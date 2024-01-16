import Sizes from '@/types/sizes'
import Variants from '@/types/variants'
import Colors from '@/types/colors'

export interface AlertProps extends Sizes, Variants, Colors {
  icon?: string | null;
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
