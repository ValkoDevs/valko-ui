import type { Sizes, Shapes, PlacementsWithAuto, Alignments } from './common'
import type { TooltipSlots } from '../styles/Tooltip.styles'

export interface TooltipProps extends Sizes, Shapes, Alignments, PlacementsWithAuto {
  content: string;
  elevated?: boolean;
  styleSlots?: Partial<TooltipSlots>;
}
