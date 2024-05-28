import type { Shapes, Color, Sizes, Variant } from './common'

export interface Crumb {
  key: string;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends Shapes, Sizes {
  variant?: Variant | 'link';
  color?: Color | 'neutral';
  crumbs: Crumb[];
  separator?: string;
  flat?: boolean;
}
