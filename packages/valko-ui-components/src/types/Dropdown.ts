import type { Shapes, Colors, Sizes, Variant } from '#valkoui'

export interface Item {
  key: string | number;
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends Colors, Sizes, Shapes {
  variant?: Variant | 'link';
  items: Item[];
  icon?: string;
  title?: string;
  flat?: boolean;
  disabled?: boolean;
}
