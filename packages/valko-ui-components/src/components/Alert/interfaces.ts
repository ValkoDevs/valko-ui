import Sizes from '#valkoui/types/sizes'
import Variants from '#valkoui/types/variants'
import Colors from '#valkoui/types/colors'
import Shapes from '#valkoui/types/shapes'

export interface AlertProps extends Sizes, Variants, Colors, Shapes {
  icon?: string | null;
  title?: string;
  closable?: boolean;
  flat?: boolean;
}
