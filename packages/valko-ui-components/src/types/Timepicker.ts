import type { DefaultComponent, AriaAttributes } from './common'
import type { TimeProps } from './Time'
import type { TimepickerSlots } from '../styles/Timepicker.styles'
export interface TimepickerProps extends DefaultComponent, TimeProps, Omit<AriaAttributes, 'aria-description'> {
  isOpen: boolean;
  parsedModel: string;
  label?: string;
  okButtonLabel?: string;
  styleSlots?: Partial<TimepickerSlots>;
}
