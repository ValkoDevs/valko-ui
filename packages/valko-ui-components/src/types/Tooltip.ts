import type { Sizes, Shapes, Placement } from './common'

export interface TooltipProps extends Sizes, Shapes {
  content: string;
  placement?: Placement;
  flat?: boolean;
}
