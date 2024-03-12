import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import Variants from '#valkoui/types/variants'
import Shapes from '#valkoui/types/shapes'

export interface CheckboxProps extends Colors, Sizes, Variants, Shapes {
  helpertext?: string;
  label?: string;
  modelValue?: boolean | null;
  disabled?: boolean;
  flat?: boolean;
  labelPosition?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
}
