import type { Sizes, Colors } from './common'

export interface RatingProps extends Sizes, Colors {
  modelValue?: number;
  max?: number;
  name?: string;
  allowHalf?: boolean;
  readonly?: boolean
}
