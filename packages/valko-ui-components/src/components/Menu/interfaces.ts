import Colors from '#valkoui/types/colors'
import Shapes from '#valkoui/types/shapes'
import Sizes from '#valkoui/types/sizes'
import Variants from '#valkoui/types/variants'

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
