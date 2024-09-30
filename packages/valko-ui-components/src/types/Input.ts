import type { DefaultComponent } from './common'

export type InputType = 'text' | 'password' | 'email' | 'date' | 'number'
export type InputCursor = 'text' | 'pointer'

export interface InputProps extends DefaultComponent {
  type?: InputType;
  cursor?: InputCursor;
  modelValue?: string | number;
  helpertext?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  clearable?: boolean;
}
