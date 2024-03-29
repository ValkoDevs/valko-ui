import { type DefaultComponent } from '#valkoui/types'

export interface Crumb {
  key: string;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export interface BreadcrumbsProps extends DefaultComponent {
  crumbs: Crumb[];
  separator?: string;
  flat?: boolean;
}
