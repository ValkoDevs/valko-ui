import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import Variants from '#valkoui/types/variants'
import Shapes from '#valkoui/types/shapes'

export interface RadioProps extends Variants, Sizes, Colors, Shapes {
  name?: string;
  modelValue?: string;
  value?: string;
  label?: string;
  helpertext?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
