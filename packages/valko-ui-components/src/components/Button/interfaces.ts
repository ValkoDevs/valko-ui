import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

export interface ButtonProps extends Colors, Sizes, Variants  {
  rounded?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
