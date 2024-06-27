import type { Shapes, Colors, Sizes, Variant } from './common'

export interface ButtonProps extends Shapes, Sizes, Colors {
  variant?: Variant | 'link';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
