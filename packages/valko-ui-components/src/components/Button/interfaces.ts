import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import VariantsExtended from '#valkoui/types/variantsExtended'
import Shapes from '#valkoui/types/shapes'

export interface ButtonProps extends Colors, Sizes, VariantsExtended, Shapes {
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
