import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

export interface CheckboxProps extends Colors, Sizes, Variants  {
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  modelValue: boolean | null;
  label?: string;
  helpertext?: string;
  labelPosition?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
}
