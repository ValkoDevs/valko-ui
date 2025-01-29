import type { Sizes, VariantWithGradient, Colors, Shapes, Corner } from './common'

export interface BadgeProps extends Sizes, Colors, Shapes {
  variant?: VariantWithGradient;
  placement?: Corner;
  content?: number | string;
  flat?: boolean;
  hidden?: boolean;
  dot?: boolean;
}
