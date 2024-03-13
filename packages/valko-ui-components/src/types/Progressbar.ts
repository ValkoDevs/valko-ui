import type { Variants, Sizes, Colors, Shape } from '#valkoui/types'

export interface ProgressbarProps extends Variants, Sizes, Colors {
  shape?: Shape | 'line';
  progress?: number;
  buffer?: number;
  indeterminateLabel?: string;
  indeterminate?: boolean;
  striped?: boolean;
  showValue?: boolean;
}
