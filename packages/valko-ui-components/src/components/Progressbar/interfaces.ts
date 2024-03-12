import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import Variants from '#valkoui/types/variants'

export interface ProgressbarProps extends Variants, Sizes, Colors {
  shape?: 'line' | 'rounded' | 'square' | 'soft';
  progress?: number;
  buffer?: number;
  indeterminateLabel?: string;
  indeterminate?: boolean;
  striped?: boolean;
  showValue?: boolean;
}
