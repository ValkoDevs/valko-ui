import type { DefaultComponent } from './common'

export interface SelectOption {
  value: number;
  label: string;
}

export interface SelectProps extends DefaultComponent {
  options?: SelectOption[];
  modelValue?: string | number | Array<string | number>;
  placeholder?: string;
  helpertext?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
}
