import type { Shapes, Color, Sizes, Variant } from './common'

export interface ButtonProps extends Shapes, Sizes {
  color?: Color | 'neutral';
  variant?: Variant | 'link';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
