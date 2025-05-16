import type { Sizes, ColorsWithSurface } from './common'

export interface SpinnerProps extends Sizes, ColorsWithSurface {
  name?: string;
  loading?: boolean;
  condensed?: boolean;
  classes?: string | string[];
}
