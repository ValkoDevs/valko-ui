import { type DefaultComponent } from '#valkoui/types'

export interface MenuItem {
  key: string | number;
  text: string;
  group?: string;
  icon?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export interface MenuProps extends DefaultComponent {
  items: MenuItem[];
  active: null | string | number;
  floating?: boolean;
}
