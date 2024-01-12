import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

export interface InputProps extends Colors, Sizes, Variants  {
  type: 'text' | 'password' | 'email' | 'date';
  modelValue?: string;
  helpertext?: string;
  label?: string;
  iconRight?: string;
  iconLeft?: string;
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  isOpen?: boolean;
}
