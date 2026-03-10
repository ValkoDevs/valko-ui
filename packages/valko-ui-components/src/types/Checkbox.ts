import type { DefaultComponent, LabelPosition, AriaAttributes } from './common'
import type { CheckboxSlots } from '../styles/Checkbox.styles'

export interface CheckboxProps extends DefaultComponent, Pick<AriaAttributes, 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy'> {
  helpertext?: string;
  label?: string;
  modelValue?: boolean | null;
  disabled?: boolean;
  labelPosition?: LabelPosition;
  readonly?: boolean;
  name?: string;
  styleSlots?: Partial<CheckboxSlots>;
}
