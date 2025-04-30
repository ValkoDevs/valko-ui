import type { Shapes, Colors, Sizes, VariantWithGradientAndLink } from './common'

export interface ButtonProps extends Shapes, Sizes, Colors {
  variant?: VariantWithGradientAndLink;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  elevated?: boolean;
  condensed?: boolean;
}
