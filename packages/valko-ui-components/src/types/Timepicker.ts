import type { DefaultComponent, AriaAttributes } from './common'
import type { TimeProps } from './Time'

export interface TimepickerProps extends DefaultComponent, TimeProps, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-invalid' | 'aria-required'> {
  isOpen: boolean;
  parsedModel: string;
  label?: string;
  okButtonLabel?: string;
}
