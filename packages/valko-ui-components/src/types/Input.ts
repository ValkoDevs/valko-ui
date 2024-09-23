import type { DefaultComponent } from './common'

export interface InputProps extends DefaultComponent {
  type?: 'text' | 'password' | 'email' | 'date' | 'number';
  cursor?: 'text' | 'pointer';
  modelValue?: string;
  helpertext?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  clearable?: boolean;
}
