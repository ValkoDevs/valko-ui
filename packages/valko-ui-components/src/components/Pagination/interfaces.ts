import Sizes from '@/types/sizes'
import Variants from '@/types/variants'
 
export interface PaginationProps extends Variants, Sizes  {
  type: 'filled' | 'outlined' | 'ghost';
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
