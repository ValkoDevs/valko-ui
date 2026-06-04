import type { ColorsWithSurface, Shapes, Variants, Sizes, AriaAttributes } from './common'
import type { CalendarAdapter } from './Calendar'
import type { TimeAdapterInterface } from './Time'
import type { DateTimeControls } from '../composables/useDateTimeAdapter'
import type { DateTimePickerSlots } from '../styles/DateTimePicker.styles'

export interface DateTimePickerProps extends Shapes, Variants, ColorsWithSurface, Sizes, Omit<AriaAttributes, 'ariaDescription'> {
  calendarAdapter: CalendarAdapter;
  timeAdapter: TimeAdapterInterface;
  controls: DateTimeControls;
  modelValue: EpochTimeStamp;
  parsedModel: string;
  isOpen: boolean;
  label?: string;
  format?: string;
  locale?: string;
  okButtonLabel?: string;
  backButtonLabel?: string;
  disabledDates?: EpochTimeStamp[];
  disableWeekends?: boolean;
  minDate?: EpochTimeStamp;
  maxDate?: EpochTimeStamp;
  minTime?: EpochTimeStamp;
  maxTime?: EpochTimeStamp;
  disabledTimes?: EpochTimeStamp[];
  minuteStep?: 1 | 5 | 10 | 15 | 20 | 30;
  styleSlots?: Partial<DateTimePickerSlots>;
}
