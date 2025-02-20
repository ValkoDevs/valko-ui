import type { VariantsAlt, Sizes, Colors, ShapeWithLine } from './common'

export interface ProgressbarProps extends VariantsAlt, Sizes, Colors {
  shape?: ShapeWithLine
  progress?: number;
  buffer?: number;
  indeterminate?: boolean;
  striped?: boolean;
}
