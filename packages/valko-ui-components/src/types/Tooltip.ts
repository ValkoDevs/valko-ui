import type { Sizes, Shapes } from '#valkoui'

export interface TooltipProps extends Sizes, Shapes {
  content: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  flat?: boolean;
}
