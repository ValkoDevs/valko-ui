import type { DefaultComponent } from './common'
import type { CalendarProps } from './Calendar'

export interface DatepickerProps extends DefaultComponent, CalendarProps {
  parsedModel: string;
  flat?: boolean;
  label?: string;
}
