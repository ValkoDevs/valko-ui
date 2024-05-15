import type { Sizes, Colors } from './common'

export interface SpinnerProps extends Colors, Sizes {
  name?: string;
  loading?: boolean;
  condensed?: boolean;
}
