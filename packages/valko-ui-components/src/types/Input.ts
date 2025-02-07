import type { DefaultComponent } from './common'

export type InputType = 'text' | 'password' | 'email' | 'number'
export type InputCursor = 'text' | 'pointer'

export interface InputProps extends DefaultComponent {
  type?: InputType;
  cursor?: InputCursor;
  modelValue?: string | number;
  helpertext?: string;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  clearable?: boolean;
}
