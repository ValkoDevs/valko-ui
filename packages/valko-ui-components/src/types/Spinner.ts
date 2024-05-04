import type { Sizes, Colors } from './common'

export interface SpinnerProps extends Colors, Sizes {
  variant?: 'loader' | 'loader-2'
  loading?: boolean;
}
