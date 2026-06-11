import type { ColorsWithSurface, Sizes, AriaAttributes } from './common'
import type { RatingSlots } from '../styles/Rating.styles'

export interface RatingProps extends ColorsWithSurface, Sizes, Omit<AriaAttributes, 'ariaDescription' | 'ariaRequired' | 'ariaInvalid'> {
  modelValue: number;
  iconName?: string;
  max?: number;
  half?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  styleSlots?: Partial<RatingSlots>;
}
