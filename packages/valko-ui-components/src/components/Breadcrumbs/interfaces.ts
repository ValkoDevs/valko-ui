import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Shapes from '@/types/shapes'
import Variants from '@/types/variants'

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
