import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface CheckboxProps extends Colors, Sizes, Variants, Shapes {
  helpertext?: string;
  label?: string;
  modelValue?: boolean | null;
  disabled?: boolean;
  flat?: boolean;
  labelPosition?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
}
