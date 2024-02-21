import Sizes from '@/types/sizes'
import Colors from '@/types/colors'
import Variants from '@/types/variants'

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

export interface TabsProps extends Colors, Sizes, Variants {
  tabs: Tab[];
  shape?: 'line' | 'rounded' | 'square' | 'soft';
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
