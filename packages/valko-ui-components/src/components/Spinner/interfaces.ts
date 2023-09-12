import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface SpinnerProps extends Variants, Sizes  {
  loading?: boolean;
}