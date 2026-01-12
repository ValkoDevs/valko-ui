import type { ColorsWithSurface, VariantsAlt, Shapes, Sizes, AriaAttributes } from './common'
import type { AvatarSlots } from '../styles/Avatar.styles'

export interface AvatarProps extends ColorsWithSurface, VariantsAlt, Shapes, Sizes, Pick<AriaAttributes, 'ariaLabel'> {
  src?: string;
  name?: string;
  elevated?: boolean;
  styleSlots?: Partial<AvatarSlots>;
}
