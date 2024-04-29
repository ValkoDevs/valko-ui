import { type DefaultComponent } from '#valkoui'

export interface InputProps extends DefaultComponent {
  type?: 'text' | 'password' | 'email' | 'date';
  cursor?: 'text' | 'pointer';
  modelValue?: string;
  helpertext?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
}
