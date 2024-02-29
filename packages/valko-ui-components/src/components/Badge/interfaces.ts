import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Shapes from '@/types/shapes'

export interface BadgeProps extends Sizes, Colors, Shapes {
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  content?: number | string;
  outlined?: boolean;
  flat?: boolean;
  hidden?: boolean;
  dot?: boolean;
}
