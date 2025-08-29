import type { DefaultComponent, LabelPosition, AriaAttributes } from './common'
import type { RadioSlots } from '../styles/Radio.styles'

export interface RadioProps extends DefaultComponent, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby'> {
  name?: string;
  modelValue?: string | number;
  value?: string | number;
  label?: string;
  helpertext?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  readonly?: boolean;
  styleSlots?: Partial<RadioSlots>;
}
