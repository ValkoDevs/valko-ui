import type { Sizes, Shapes } from './common'

export interface TooltipProps extends Sizes, Shapes {
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  flat?: boolean;
}
