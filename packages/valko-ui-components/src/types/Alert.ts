import type { Colors, VariantsAlt, Shapes, Sizes } from './common'

export interface AlertProps extends Colors, VariantsAlt, Shapes, Sizes {
  icon?: string | null;
  title?: string;
  closable?: boolean;
}
