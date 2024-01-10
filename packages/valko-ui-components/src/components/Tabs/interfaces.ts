import Sizes from '@/types/sizes'
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

export interface TabsProps extends Variants, Sizes {
  type?: 'filled' | 'outlined' | 'ghost';
  shape?: 'underline' | 'rounded' | 'square' | 'soft';
  tabs: Tab[];
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
