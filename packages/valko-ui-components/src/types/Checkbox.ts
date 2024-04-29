import { type DefaultComponent } from '#valkoui'

export interface CheckboxProps extends DefaultComponent {
  helpertext?: string;
  label?: string;
  modelValue?: boolean | null;
  disabled?: boolean;
  flat?: boolean;
  labelPosition?: boolean;
  readonly?: boolean;
  indeterminate?: boolean;
}
