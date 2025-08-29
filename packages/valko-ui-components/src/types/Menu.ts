import type { Colors, VariantWithGradientLinkAndLine, Sizes, Shapes } from './common'
import type { MenuSlots } from '../styles/Menu.styles'

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
  variant?: VariantWithGradientLinkAndLine;
  items: MenuItem[];
  active: null | string | number;
  floating?: boolean;
  styleSlots?: Partial<MenuSlots>;
}
