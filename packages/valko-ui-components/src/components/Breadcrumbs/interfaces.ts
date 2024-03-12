import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import Shapes from '#valkoui/types/shapes'
import Variants from '#valkoui/types/variants'

export interface Crumb {
  key: string;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends Sizes, Variants, Colors, Shapes {
  crumbs: Crumb[];
  separator?: string;
  flat?: boolean;
}
