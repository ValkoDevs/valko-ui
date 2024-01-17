import Sizes from '@/types/sizes'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface CollapseProps extends Sizes, Variants, Shapes {
  separator?: 'line' | 'split' | 'none';
  title?: string;
  compact?: boolean;
  multiple?: boolean;
}
