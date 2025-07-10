import type { Shapes, ColorsWithSurface, Sizes, VariantWithLink, AriaAttributes } from './common'

export interface Crumb {
  key: string;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends Shapes, Sizes, ColorsWithSurface, Pick<AriaAttributes, 'aria-label'> {
  variant?: VariantWithLink;
  crumbs: Crumb[];
  separator?: string;
  condensed?: boolean;
}
