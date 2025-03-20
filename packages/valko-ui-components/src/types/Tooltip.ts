import type { Sizes, Shapes, PlacementsWithAuto, Alignments } from './common'

export interface TooltipProps extends Sizes, Shapes, Alignments, PlacementsWithAuto {
  content: string;
  flat?: boolean;
}
