import type { Shapes, Colors, Sizes, Variant } from '#valkoui'

export interface ButtonProps extends Shapes, Colors, Sizes {
  variant?: Variant | 'link';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
