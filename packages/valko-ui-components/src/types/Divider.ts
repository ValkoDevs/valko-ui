import type { ColorsWithSurface, Sizes, Shapes, Variants, AriaAttributes } from './common'

export interface DividerProps extends ColorsWithSurface, Sizes, Shapes, Variants, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'> {
  direction?: 'vertical' | 'horizontal';
}
