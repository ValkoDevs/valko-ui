import type { DefaultComponent, LabelPosition, AriaAttributes } from './common'
import type { SwitchSlots } from '../styles/Switch.styles'

export interface SwitchProps extends DefaultComponent, Pick<AriaAttributes, 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy'> {
  label?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
  styleSlots?: Partial<SwitchSlots>;
}
