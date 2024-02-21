import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface Item {
  key: string | number;
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends Colors, Sizes, Variants, Shapes {
  items: Item[];
  icon?: string;
  title?: string;
  flat?: boolean;
  disabled?: boolean;
}
