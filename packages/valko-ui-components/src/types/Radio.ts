import { type DefaultComponent } from '#valkoui/types'

export interface RadioProps extends DefaultComponent {
  name?: string;
  modelValue?: string;
  value?: string;
  label?: string;
  helpertext?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
