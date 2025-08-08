import type { ColorsWithSurface, VariantsAlt, Shapes, Sizes, AriaAttributes } from './common'

export interface AvatarProps extends ColorsWithSurface, VariantsAlt, Shapes, Sizes, Pick<AriaAttributes, 'aria-label'> {
  src?: string;
  name?: string;
  elevated?: boolean;
}
