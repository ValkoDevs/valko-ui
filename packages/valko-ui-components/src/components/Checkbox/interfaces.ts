import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface CheckboxProps extends Variants, Sizes  {
  type: 'filled' | 'outlined';
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  modelValue: boolean | null;
  label?: string;
  errorText?: string;
  labelPosition?: boolean;
  readOnly?: boolean;
  indeterminate?: boolean;
}
