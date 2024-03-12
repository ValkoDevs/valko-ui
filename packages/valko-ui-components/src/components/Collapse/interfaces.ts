import Sizes from '#valkoui/types/sizes'
import Variants from '#valkoui/types/variants'
import Shapes from '#valkoui/types/shapes'

export interface CollapseProps extends Sizes, Variants, Shapes {
  separator?: 'line' | 'split' | 'none';
  title?: string;
  compact?: boolean;
  multiple?: boolean;
}
