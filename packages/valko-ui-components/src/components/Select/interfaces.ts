import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import Variants from '#valkoui/types/variants'
import Shapes from '#valkoui/types/shapes'

export interface Option {
  value: number;
  label: string;
}

export interface SelectProps extends Variants, Sizes, Colors, Shapes {
  options?: Option[];
  modelValue?: string | number | Array<string | number>;
  placeholder?: string;
  helpertext?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
