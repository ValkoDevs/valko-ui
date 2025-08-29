import type { ColorsWithSurface, Sizes, Shapes, Variants, AriaAttributes } from './common'
import type { DividerSlots } from '../styles/Divider.styles'

export interface DividerProps extends ColorsWithSurface, Sizes, Shapes, Variants, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'> {
  direction?: 'vertical' | 'horizontal';
  styleSlots?: Partial<DividerSlots>;
}
