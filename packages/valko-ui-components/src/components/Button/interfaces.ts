import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import VariantsExtended from '@/types/variantsExtended'
import Shapes from '@/types/shapes'

export interface ButtonProps extends Colors, Sizes, VariantsExtended, Shapes {
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
