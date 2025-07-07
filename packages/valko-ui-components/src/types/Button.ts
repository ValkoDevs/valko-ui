import type { Shapes, ColorsWithSurface, Sizes, VariantWithGradientAndLink } from './common'

export interface ButtonProps extends Shapes, Sizes, ColorsWithSurface {
  variant?: VariantWithGradientAndLink;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  elevated?: boolean;
  condensed?: boolean;
  'aria-label'?: string;
}
