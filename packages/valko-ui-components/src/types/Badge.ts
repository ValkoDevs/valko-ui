import type { Sizes, VariantWithGradient, ColorsWithSurface, Shapes, Corner } from './common'

export interface BadgeProps extends Sizes, ColorsWithSurface, Shapes {
  variant?: VariantWithGradient;
  placement?: Corner;
  content?: number | string;
  hidden?: boolean;
  dot?: boolean;
}
