import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

export interface RadioProps extends Variants, Sizes, Colors {
  name: string;
  modelValue: string;
  value: string;
  label: string;
  helpertext?: string;
  position: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
