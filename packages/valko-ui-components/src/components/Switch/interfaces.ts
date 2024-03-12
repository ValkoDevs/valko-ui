import Sizes from '#valkoui/types/sizes'
import ColorsReduced from '#valkoui/types/colorsReduced'
import Shapes from '#valkoui/types/shapes'
import Variants from '#valkoui/types/variants'

export interface SwitchProps extends ColorsReduced, Sizes, Shapes, Variants {
  label?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
}
