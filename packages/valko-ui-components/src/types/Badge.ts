import type { Sizes, VariantWithGradient, ColorsWithSurface, Shapes, Alignments, Placements } from './common'

export interface BadgeProps extends Sizes, ColorsWithSurface, Shapes, Alignments, Placements {
  variant?: VariantWithGradient;
  content?: number | string;
  hidden?: boolean;
  dot?: boolean;
}
