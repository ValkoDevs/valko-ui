import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface TextareaProps extends Variants, Sizes  {
  type: 'filled' | 'outlined' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  readonly?: boolean;
  modelValue?: string;
  helpertext?: string;
  label?: string;
  maxlength?: number;
}
