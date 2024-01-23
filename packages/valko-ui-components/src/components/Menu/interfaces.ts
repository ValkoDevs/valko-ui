import Colors from '@/types/colors'
import Shapes from '@/types/shapes'
import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

export interface MenuItem {
  key: string | number;
  text: string;
  group?: string;
  icon?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export interface MenuProps extends Colors, Shapes, Variants, Sizes {
  items: MenuItem[];
  active: null | string | number;
  floating?: boolean;
}
