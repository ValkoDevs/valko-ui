import type { ColorsWithSurface, VariantsAlt, Shapes, Sizes } from './common'

export interface AlertProps extends ColorsWithSurface, VariantsAlt, Shapes, Sizes {
  icon?: string | null;
  title?: string;
  closable?: boolean;
}
