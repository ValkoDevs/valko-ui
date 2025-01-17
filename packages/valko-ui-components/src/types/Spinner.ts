import type { Sizes, Colors } from './common'

export interface SpinnerProps extends Sizes, Colors {
  name?: string;
  loading?: boolean;
  condensed?: boolean;
  className?: string;
}
