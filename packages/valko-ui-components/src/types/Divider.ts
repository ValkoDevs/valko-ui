import type { ColorsWithSurface, Sizes, Shapes, Variants } from './common'

export interface DividerProps extends ColorsWithSurface, Sizes, Shapes, Variants {
  direction?: 'vertical' | 'horizontal';
  'aria-label'?: string;
  'aria-labelledby'?: string;
}
