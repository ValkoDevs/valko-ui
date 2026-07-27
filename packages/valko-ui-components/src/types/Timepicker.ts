import type { Sizes, ColorsWithSurface, Variants, Shapes, AriaAttributes } from './common'
import type { TimeProps } from './Time'

export interface TimepickerProps extends Sizes, ColorsWithSurface, Variants, Shapes, TimeProps, Omit<AriaAttributes, 'ariaDescription'> {
  isOpen?: boolean;
  displayValue: string;
  label?: string;
  okButtonLabel?: string;
}
