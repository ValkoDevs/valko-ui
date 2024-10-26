import type { DefaultComponent, LabelPosition } from './common'

export interface CheckboxProps extends DefaultComponent {
  helpertext?: string;
  label?: string;
  modelValue?: boolean | null;
  disabled?: boolean;
  flat?: boolean;
  labelPosition?: LabelPosition;
  readonly?: boolean;
}
