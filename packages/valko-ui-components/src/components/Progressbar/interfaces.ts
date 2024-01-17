import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

export interface ProgressbarProps extends Variants, Sizes, Colors {
  shape?: 'line' | 'rounded' | 'square' | 'soft';
  progress?: number;
  buffer?: number;
  indeterminateLabel?: string;
  indeterminate?: boolean;
  striped?: boolean;
  showValue?: boolean;
}
