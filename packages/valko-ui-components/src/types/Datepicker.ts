import type { AriaAttributes } from './common'
import type { CalendarProps } from './Calendar'

export interface DatepickerProps extends CalendarProps, Omit<AriaAttributes, 'ariaDescription'> {
  parsedModel: string;
  isOpen?: boolean;
  label?: string;
}
