import type { Shapes, Colors, Sizes, VariantWithGradientAndLink, PlacementsWithAuto, Alignments } from './common'

export interface Item {
  key: string | number;
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends Colors, Sizes, Shapes, Alignments, PlacementsWithAuto {
  variant?: VariantWithGradientAndLink;
  items: Item[];
  icon?: string;
  label?: string;
  flat?: boolean;
  disabled?: boolean;
}
