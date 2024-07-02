import type { Colors, VariantWithGradient, Sizes, Shapes } from './common'

export interface MenuItem {
  key: string | number;
  text: string;
  group?: string;
  icon?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export interface MenuProps extends Colors, Sizes, Shapes {
  variant?: VariantWithGradient | 'link' | 'line';
  items: MenuItem[];
  active: null | string | number;
  floating?: boolean;
}
