import type { DefaultComponent, AriaAttributes } from './common'
import type { SelectSlots } from '../styles/Select.styles'

export interface SelectOption<T = string | number> {
  value: T;
  label: string;
}

export interface SelectProps extends DefaultComponent, Omit<AriaAttributes, 'ariaDescription'> {
  options?: SelectOption[];
  modelValue?: string | number | Array<string | number>;
  label?: string;
  helpertext?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  disableIconClickFocus?: boolean;
  styleSlots?: Partial<SelectSlots>;
}
