import type { Sizes, VariantWithGradient, ColorsWithSurface, Shapes, Alignments, Placements, AriaAttributes } from './common'
import type { BadgeSlots } from '../styles/Badge.styles'

export interface BadgeProps extends Sizes, ColorsWithSurface, Shapes, Alignments, Placements, Pick<AriaAttributes, 'aria-label'> {
  variant?: VariantWithGradient;
  content?: number | string;
  hidden?: boolean;
  dot?: boolean;
  styleSlots?: Partial<BadgeSlots>;
}
