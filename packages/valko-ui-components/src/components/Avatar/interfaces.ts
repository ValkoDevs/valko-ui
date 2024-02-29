import Sizes from '@/types/sizes'
import Variants from '@/types/variants'
import Colors from '@/types/colors'
import Shapes from '@/types/shapes'

export interface AvatarProps extends Sizes, Variants, Colors, Shapes {
  src: string;
  name?: string;
  flat?: boolean;
}
