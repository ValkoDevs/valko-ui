import type { Shapes, Colors, Sizes, VariantWithLink } from './common'

export interface Crumb {
  key: string;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends Shapes, Sizes, Colors {
  variant?: VariantWithLink;
  crumbs: Crumb[];
  separator?: string;
  condensed?: boolean;
}
