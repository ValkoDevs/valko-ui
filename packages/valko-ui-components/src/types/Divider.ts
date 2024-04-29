import type { Shapes, Color, Sizes, Variants } from '#valkoui'

export interface DividerProps extends Shapes, Sizes, Variants {
  color?: Color | 'neutral';
  direction?: 'vertical' | 'horizontal';
}
