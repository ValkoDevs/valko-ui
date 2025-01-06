import type { Sizes, Color } from './common'

export interface SpinnerProps extends Sizes {
  color?: Color | 'black' | 'white',
  name?: string;
  loading?: boolean;
  condensed?: boolean;
}
