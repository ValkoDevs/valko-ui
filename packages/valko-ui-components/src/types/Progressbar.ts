import type { VariantsAlt, Sizes, Colors, ShapeWithLine } from './common'
import type { ProgressbarSlots } from '../styles/Progressbar.styles'

export interface ProgressbarProps extends VariantsAlt, Sizes, Colors {
  shape?: ShapeWithLine
  progress?: number;
  buffer?: number;
  indeterminate?: boolean;
  striped?: boolean;
  styleSlots?: Partial<ProgressbarSlots>;
}
