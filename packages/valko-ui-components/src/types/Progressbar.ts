import type { VariantsAlt, Sizes, Colors, ShapeWithLine } from './common'

export interface ProgressbarProps extends VariantsAlt, Sizes, Colors {
  shape?: ShapeWithLine
  progress?: number;
  buffer?: number;
  indeterminateLabel?: string;
  indeterminate?: boolean;
  striped?: boolean;
  showValue?: boolean;
}
