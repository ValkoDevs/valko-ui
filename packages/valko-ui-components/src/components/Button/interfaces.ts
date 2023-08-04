import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface ButtonProps extends Variants, Sizes  {
  type: 'filled' | 'outlined' | 'ghost';
  rounded?: boolean;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
}
