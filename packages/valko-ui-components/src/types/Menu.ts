import type { Colors, Variant, Sizes, Shapes } from './common'

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
  variant: Variant | 'link' | 'line';
  items: MenuItem[];
  active: null | string | number;
  floating?: boolean;
}
