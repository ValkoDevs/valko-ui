import type { AriaAttributes } from './common'
import type { CalendarProps } from './Calendar'
import type { DatePickerSlots } from '../styles/Datepicker.styles'

export interface DatepickerProps extends CalendarProps, Omit<AriaAttributes, 'ariaDescription'> {
  displayValue: string;
  isOpen: boolean;
  label?: string;
  styleSlots?: Partial<DatePickerSlots>;
}
