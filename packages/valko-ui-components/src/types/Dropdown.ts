import type { Shapes, Colors, Sizes, VariantWithGradientAndLink } from './common'

export interface Item {
  key: string | number;
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends Colors, Sizes, Shapes {
  variant?: VariantWithGradientAndLink;
  items: Item[];
  icon?: string;
  title?: string;
  flat?: boolean;
  disabled?: boolean;
}
