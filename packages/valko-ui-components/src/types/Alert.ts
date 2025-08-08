import type { ColorsWithSurface, VariantsAlt, Shapes, Sizes, AriaAttributes } from './common'

export interface AlertProps extends ColorsWithSurface, VariantsAlt, Shapes, Sizes, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby'> {
  icon?: string | null;
  title?: string;
  closable?: boolean;
}
