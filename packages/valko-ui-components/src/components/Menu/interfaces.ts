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

export interface MenuProps extends Variants  {
  items: MenuItem[];
  active: null | string | number;
  rounded?: boolean;
  floating?: boolean;
}
