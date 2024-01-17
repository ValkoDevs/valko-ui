import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface ButtonProps extends Colors, Sizes, Variants, Shapes {
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
