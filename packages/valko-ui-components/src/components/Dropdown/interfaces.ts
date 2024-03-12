import Sizes from '#valkoui/types/sizes'
import Colors from '#valkoui/types/colors'
import VariantsExtended from '#valkoui/types/variantsExtended'
import Shapes from '#valkoui/types/shapes'

export interface Item {
  key: string | number;
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends Colors, VariantsExtended, Sizes, Shapes {
  items: Item[];
  icon?: string;
  title?: string;
  flat?: boolean;
  disabled?: boolean;
}
