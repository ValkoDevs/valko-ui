import type { Sizes, Colors } from '#valkoui/types'

export interface SpinnerProps extends Colors, Sizes {
  variant?: 'loader' | 'loader-2'
  loading?: boolean;
}
