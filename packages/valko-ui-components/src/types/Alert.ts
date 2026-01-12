import type { ColorsWithSurface, VariantsAlt, Shapes, Sizes, AriaAttributes } from './common'
import type { AlertSlots } from '../styles/Alert.styles'

export interface AlertProps extends ColorsWithSurface, VariantsAlt, Shapes, Sizes, Pick<AriaAttributes, 'ariaLabel' | 'ariaLabelledBy'> {
  icon?: string | null;
  title?: string;
  closable?: boolean;
  elevated?: boolean;
  styleSlots?: Partial<AlertSlots>;
}
