import type { Shapes, Color, Sizes, Variants } from './common'

export interface PaginationProps extends Shapes, Sizes, Variants {
  color?: Color | 'neutral';
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
