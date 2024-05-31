import type { DefaultComponent } from './common'

export interface RadioProps extends DefaultComponent {
  name?: string;
  modelValue?: string | number;
  value?: string | number;
  label?: string;
  helpertext?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
