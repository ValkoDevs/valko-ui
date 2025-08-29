import type { AriaAttributes } from './common'
import type { CalendarProps } from './Calendar'
import type { DatePickerSlots } from '../styles/Datepicker.styles'

export interface DatepickerProps extends CalendarProps, Omit<AriaAttributes, 'aria-description'> {
  parsedModel: string;
  isOpen: boolean;
  label?: string;
  styleSlots?: Partial<DatePickerSlots>;
}
