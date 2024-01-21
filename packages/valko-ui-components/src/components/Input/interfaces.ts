import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface InputProps extends Colors, Sizes, Variants, Shapes {
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
