import type { DefaultComponent, LabelPosition } from './common'

export interface SwitchProps extends DefaultComponent {
  label?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
}
