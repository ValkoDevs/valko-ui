import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

export interface CheckboxProps extends Colors, Sizes, Variants  {
  helpertext?: string;
  label?: string;
  modelValue: boolean | null;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  labelPosition?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
}
