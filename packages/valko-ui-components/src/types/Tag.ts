import type { Shapes, ColorsWithSurface, Sizes, VariantsAlt } from './common'
import type { TagSlots } from '../styles/Tag.styles'

export interface TagProps extends Shapes, Sizes, VariantsAlt, ColorsWithSurface {
  text: string;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  closable?: boolean;
  isPressable?: boolean;
  styleSlots?: Partial<TagSlots>;
}
