import type { Shapes, ColorsWithSurface, Sizes, VariantWithGradientAndLink, PlacementsWithAuto, Alignments } from './common'
import type { DropdownSlots } from '../styles/Dropdown.styles'

export interface Item {
  key: string | number;
  title: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface DropdownProps extends ColorsWithSurface, Sizes, Shapes, Alignments, PlacementsWithAuto {
  variant?: VariantWithGradientAndLink;
  items: Item[];
  icon?: string;
  label?: string;
  elevated?: boolean;
  disabled?: boolean;
  isOpen?: boolean;
  styleSlots?: Partial<DropdownSlots>;
}
