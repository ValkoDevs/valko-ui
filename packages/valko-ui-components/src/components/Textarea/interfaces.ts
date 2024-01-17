import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface TextareaProps extends Colors, Sizes, Variants, Shapes {
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  modelValue?: string;
  helpertext?: string;
  label?: string;
  maxlength?: number;
}
