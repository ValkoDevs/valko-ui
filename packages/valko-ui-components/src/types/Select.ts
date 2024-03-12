import { type DefaultComponent } from '#valkoui/types'

export interface Option {
  value: number;
  label: string;
}

export interface SelectProps extends DefaultComponent {
  options?: Option[];
  modelValue?: string | number | Array<string | number>;
  placeholder?: string;
  helpertext?: string;
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
