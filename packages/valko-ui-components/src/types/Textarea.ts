import { type DefaultComponent } from '#valkoui'

export interface TextareaProps extends DefaultComponent {
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  modelValue?: string;
  helpertext?: string;
  label?: string;
  maxlength?: number;
}
