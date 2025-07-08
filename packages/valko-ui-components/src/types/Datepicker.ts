import type { AriaAttributes } from './common'
import type { CalendarProps } from './Calendar'

export interface DatepickerProps extends CalendarProps, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-invalid' | 'aria-required'> {
  parsedModel: string;
  isOpen: boolean;
  label?: string;
}
