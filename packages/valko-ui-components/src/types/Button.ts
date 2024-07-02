import type { Shapes, Colors, Sizes, VariantWithGradient } from './common'

export interface ButtonProps extends Shapes, Sizes, Colors {
  variant?: VariantWithGradient | 'link';
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  flat?: boolean;
  condensed?: boolean;
}
