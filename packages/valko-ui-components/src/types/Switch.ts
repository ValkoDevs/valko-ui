import type { DefaultComponent, LabelPosition, AriaAttributes } from './common'
import type { SwitchSlots } from '../styles/Switch.styles'

export interface SwitchProps extends DefaultComponent, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby'> {
  label?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
  styleSlots?: Partial<SwitchSlots>;
}
