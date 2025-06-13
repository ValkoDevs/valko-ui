import type { CalendarProps } from './Calendar'

export interface DatepickerProps extends CalendarProps {
  parsedModel: string;
  isOpen: boolean;
  label?: string;
}
