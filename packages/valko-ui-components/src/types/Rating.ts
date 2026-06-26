import type { Colors, Sizes, AriaAttributes } from './common'
import type { RatingSlots } from '../styles/Rating.styles'

export interface RatingProps extends Colors, Sizes, Omit<AriaAttributes, 'ariaDescription' | 'ariaRequired' | 'ariaInvalid'> {
  modelValue: number;
  iconName?: string;
  max?: number;
  half?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  styleSlots?: Partial<RatingSlots>;
}
