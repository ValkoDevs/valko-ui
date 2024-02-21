import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

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
