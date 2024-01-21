import Sizes from '@/types/sizes'
import Colors from '@/types/colors'

export interface SpinnerProps extends Colors, Sizes {
  variant?: 'loader' | 'loader-2'
  loading?: boolean;
}
