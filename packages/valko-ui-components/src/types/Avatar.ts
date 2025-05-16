import type { ColorsWithSurface, VariantsAlt, Shapes, Sizes } from './common'

export interface AvatarProps extends ColorsWithSurface, VariantsAlt, Shapes, Sizes {
  src?: string;
  name?: string;
  elevated?: boolean;
}
