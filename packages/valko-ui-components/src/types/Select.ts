import type { DefaultComponent, AriaAttributes } from './common'

export interface SelectOption<T = string | number> {
  value: T;
  label: string;
}

export interface SelectProps extends DefaultComponent, Pick<AriaAttributes, 'aria-label' | 'aria-describedby' | 'aria-labelledby' | 'aria-required' | 'aria-invalid'> {
  options?: SelectOption[];
  modelValue?: string | number | Array<string | number>;
  label?: string;
  helpertext?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
}
