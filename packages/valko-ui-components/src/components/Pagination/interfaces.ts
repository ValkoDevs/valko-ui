import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface PaginationProps extends Colors, Sizes, Variants, Shapes {
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
