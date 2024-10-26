import type { DefaultComponent } from './common'

export interface SelectOption<T = string | number> {
  value: T;
  label: string;
}

export interface SelectProps extends DefaultComponent {
  options?: SelectOption[];
  modelValue?: string | number | Array<string | number>;
  label?: string;
  helpertext?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  allowClear?: boolean;
}
