import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface Option {
  value: number;
  label: string;
}

export interface SelectProps extends Variants, Sizes  {
  type: 'filled' | 'outlined' | 'ghost';
  options?: Option[];
  modelValue?: string | number | Array<string | number>;
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  isOpen?: boolean;
  rounded?: boolean;
  helpertext?: string;
}
