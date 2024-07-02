import type { Colors, VariantsAlt, Shapes, Sizes } from './common'

export interface AvatarProps extends Colors, VariantsAlt, Shapes, Sizes {
  src: string;
  name?: string;
  flat?: boolean;
}
