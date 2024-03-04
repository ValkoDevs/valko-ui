import Sizes from '@/types/sizes'
import ColorsReduced from '@/types/colorsReduced'
import Shapes from '@/types/shapes'
import Variants from '@/types/variants'

export interface SwitchProps extends ColorsReduced, Sizes, Shapes, Variants {
  label?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
}
