import type { DefaultComponent, LabelPosition, AriaAttributes } from './common'

export interface CheckboxProps extends DefaultComponent, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby'> {
  helpertext?: string;
  label?: string;
  modelValue?: boolean | null;
  disabled?: boolean;
  labelPosition?: LabelPosition;
  readonly?: boolean;
  name?: string;
  styleSlots?: {
    container?: string;
    checkboxContainer?: string;
    stateLayer?: string;
    checkbox?: string;
    icon?: string;
    input?: string;
    label?: string;
    helpertext?: string;
  };
}
