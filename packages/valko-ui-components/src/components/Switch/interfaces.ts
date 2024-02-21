import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Shapes from '@/types/shapes'
import Variants from '@/types/variants'

export interface SwitchProps extends Colors, Sizes, Shapes, Variants {
  label?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
}
