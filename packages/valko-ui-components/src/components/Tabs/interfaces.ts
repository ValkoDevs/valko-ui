import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'
import Shapes from '@/types/shapes'

export interface Tab {
  key: string | number;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
}

export interface TabKeymap {
  [key: string]: string
}

export interface TabsProps extends Colors, Sizes, Variants, Shapes {
  tabs: Tab[];
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
