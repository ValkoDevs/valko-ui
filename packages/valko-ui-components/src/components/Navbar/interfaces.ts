import Colors from '#valkoui/types/colors'
import Sizes from '#valkoui/types/sizes'
import Shapes from '#valkoui/types/shapes'
import Variants from '#valkoui/types/variants'

export interface NavbarProps extends Sizes, Shapes, Variants {
  color?: Colors['color'] | 'neutral';
  fixed?: boolean;
  floating?: boolean;
  flat?: boolean;
}
