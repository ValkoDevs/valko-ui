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
  shape?: 'underline' | 'rounded' | 'square' | 'soft';
  tabs: Tab[];
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
