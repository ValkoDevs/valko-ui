import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface InputProps extends Variants, Sizes  {
  kind: 'filled' | 'outlined' | 'ghost';
  type: 'text' | 'password' | 'email' | 'date';
  rounded?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  readonly?: boolean;
  modelValue?: string;
  helpertext?: string;
  label?: string;
}
