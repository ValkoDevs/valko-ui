import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

export interface PaginationProps extends Colors, Sizes, Variants  {
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
