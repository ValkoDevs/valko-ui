import type { Ref } from 'vue'
import type { ColorsWithSurface, Shapes, Variants, Sizes, AriaAttributes } from './common'
import type { CalendarAdapter } from './Calendar'
import type { TimeAdapterInterface } from './Time'
import type { DateTimePickerSlots } from '../styles/DateTimePicker.styles'

export interface DateTimeAdapterProps {
  format?: string;
  locale?: string;
  minDate?: EpochTimeStamp;
  maxDate?: EpochTimeStamp;
  disabledDates?: EpochTimeStamp[];
  minTime?: EpochTimeStamp;
  maxTime?: EpochTimeStamp;
  disabledTimes?: EpochTimeStamp[];
}

export interface DateTimeControls {
  commitSelection: () => EpochTimeStamp;
  resetSelection: () => void;
}

export interface DateTimeAdapter {
  date: CalendarAdapter;
  time: TimeAdapterInterface;
}

export interface DateTimeAdapterResult {
  model: Ref<EpochTimeStamp>;
  displayValue: Ref<string>;
  adapter: DateTimeAdapter;
  controls: DateTimeControls;
}

export interface DateTimePickerProps extends Shapes, Variants, ColorsWithSurface, Sizes, Omit<AriaAttributes, 'ariaDescription'> {
  adapter: DateTimeAdapter;
  controls: DateTimeControls;
  modelValue: EpochTimeStamp;
  displayValue: string;
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
