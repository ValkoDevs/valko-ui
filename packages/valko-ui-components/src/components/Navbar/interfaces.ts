import Colors from '@/types/colors'
import Sizes from '@/types/sizes'
import Shapes from '@/types/shapes'
import Variants from '@/types/variants'

export interface NavbarProps extends Sizes, Shapes, Variants {
  color?: Colors['color'] | 'neutral';
  fixed?: boolean;
  floating?: boolean;
  flat?: boolean;
}
