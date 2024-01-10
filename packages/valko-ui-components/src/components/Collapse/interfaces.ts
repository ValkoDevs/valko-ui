import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface CollapseProps extends Sizes, Variants  {
  separator?: 'line' | 'split' | 'none';
  title?: string;
  compact?: boolean;
  multiple?: boolean;
}
