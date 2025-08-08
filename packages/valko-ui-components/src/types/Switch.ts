import type { DefaultComponent, LabelPosition, AriaAttributes } from './common'

export interface SwitchProps extends DefaultComponent, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby'> {
  label?: string;
  labelPosition?: LabelPosition;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
}
