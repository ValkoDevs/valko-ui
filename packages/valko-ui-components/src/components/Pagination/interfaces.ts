import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import Variants from '#valkoui/types/variants'
import Shapes from '#valkoui/types/shapes'

export interface PaginationProps extends Colors, Sizes, Variants, Shapes {
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
