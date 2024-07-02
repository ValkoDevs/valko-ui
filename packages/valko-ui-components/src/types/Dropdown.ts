import type { Shapes, Colors, Sizes, VariantWithGradient } from './common'

export interface Item {
  key: string | number;
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends Colors, Sizes, Shapes {
  variant?: VariantWithGradient | 'link';
  items: Item[];
  icon?: string;
  title?: string;
  flat?: boolean;
  disabled?: boolean;
}
