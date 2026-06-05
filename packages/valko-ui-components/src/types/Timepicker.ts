import type { DefaultComponent, AriaAttributes } from './common'
import type { TimeProps } from './Time'
import type { TimepickerSlots } from '../styles/Timepicker.styles'
export interface TimepickerProps extends DefaultComponent, Omit<TimeProps, 'styleSlots'>, Omit<AriaAttributes, 'ariaDescription'> {
  isOpen: boolean;
  displayValue: string;
  label?: string;
  okButtonLabel?: string;
  styleSlots?: Partial<TimepickerSlots>;
}
