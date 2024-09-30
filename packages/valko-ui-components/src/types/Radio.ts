import type { DefaultComponent, LabelPosition } from './common'

export interface RadioProps extends DefaultComponent {
  name?: string;
  modelValue?: string | number;
  value?: string | number;
  label?: string;
  helpertext?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  readonly?: boolean;
}
