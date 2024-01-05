import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface InputProps extends Variants, Sizes  {
  kind: 'filled' | 'outlined' | 'ghost';
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
