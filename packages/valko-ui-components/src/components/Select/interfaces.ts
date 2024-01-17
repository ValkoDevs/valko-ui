import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface Option {
  value: number;
  label: string;
}

export interface SelectProps extends Variants, Sizes, Colors, Shapes {
  options?: Option[];
  modelValue?: string | number | Array<string | number>;
  placeholder?: string;
  helpertext?: string;
  iconLeft?: string;
  iconRight?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  isOpen?: boolean;
  rounded?: boolean;
}
