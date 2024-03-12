import Sizes from '#valkoui/types/sizes'
import Variants from '#valkoui/types/variants'
import Colors from '#valkoui/types/colors'
import Shapes from '#valkoui/types/shapes'

export interface AvatarProps extends Sizes, Variants, Colors, Shapes {
  src: string;
  name?: string;
  flat?: boolean;
}
