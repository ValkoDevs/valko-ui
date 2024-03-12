import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import Variants from '#valkoui/types/variants'
import Shapes from '#valkoui/types/shapes'

export interface InputProps extends Colors, Sizes, Variants, Shapes {
  type?: 'text' | 'password' | 'email' | 'date';
  cursor?: 'text' | 'pointer';
  modelValue?: string;
  helpertext?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
}
