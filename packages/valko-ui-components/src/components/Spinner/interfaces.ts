import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'

export interface SpinnerProps extends Colors, Sizes {
  variant?: 'loader' | 'loader-2'
  loading?: boolean;
}
