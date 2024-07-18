import type { VariantsAlt, Sizes, Colors, Shapes } from './common'

export interface RangeProps extends VariantsAlt, Sizes, Colors, Shapes {
  minThumbValue?: number;
  maxThumbValue?: number
  progress?: number;
  min?: number;
  max?: number;
  step?: number;
  offset?: number;
  striped?: boolean;
  isRange?: boolean;
  showSteps?: boolean;
}
