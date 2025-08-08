import type { AriaAttributes } from './common'
import type { CalendarProps } from './Calendar'

export interface DatepickerProps extends CalendarProps, Omit<AriaAttributes, 'aria-description'> {
  parsedModel: string;
  isOpen: boolean;
  label?: string;
}
