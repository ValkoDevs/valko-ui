import type { ComputedRef, Ref } from 'vue'
import type { Sizes, ColorsWithSurface, Variants, Shapes } from './common'

export type DisplayView = 'days' | 'months' | 'years'
export type SelectionType = 'full' | 'month-only' | 'year-only' | 'day-month' | 'month-year'
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type AdapterProps = Pick<CalendarProps, 'minDate' | 'maxDate' | 'format' | 'disabledDates' | 'locale'>
export type AdapterResult = [
  Ref<EpochTimeStamp>,
  ComputedRef<string>,
  CalendarAdapter
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormattedDate<T = any> {
  day: number;
  month: number;
  year: number;
  lastDayOfMonth: number;
  firstWeekDay: DayOfWeek;
  obj: T;
}

export interface CalendarProps extends Sizes, ColorsWithSurface, Variants, Shapes {
  adapter: CalendarAdapter;
  modelValue: EpochTimeStamp;
  locale?: string;
  format?: string;
  disabledDates?: EpochTimeStamp[];
  disableWeekends?: boolean;
  minDate?: EpochTimeStamp;
  maxDate?: EpochTimeStamp;
}

export interface CalendarDayViewProps extends CalendarProps {
  daysInMonth: number;
  startsOn: DayOfWeek;
  selected: FormattedDate;
  display: FormattedDate;
  weekDays: string[];
  monthNames: string[];
  min?: FormattedDate;
  max?: FormattedDate;
  disabledDays?: number[];
}

export interface CalendarMonthViewProps extends CalendarProps {
  selected: FormattedDate;
  display: FormattedDate;
  monthNames: string[];
  min?: FormattedDate;
  max?: FormattedDate;
}

export interface CalendarYearViewProps extends CalendarProps {
  selected: FormattedDate;
  startsOn: number;
  minYear?: number;
  maxYear?: number;
}

export interface CalendarHeaderProps extends CalendarProps {
  loadedPeriod?: string | number;
  disabledLeft?: boolean;
  disabledRight?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CalendarAdapter<T = any> {
  formattedDates: ComputedRef<{
    selected: FormattedDate<T>;
    display: FormattedDate<T>;
    min?: FormattedDate<T>;
    max?: FormattedDate<T>;
  }>;
  disabledDates: ComputedRef<number[]>;
  onSelectDay: (day: number) => number;
  onSelectMonth: (month: number) => number;
  onSelectYear: (year: number) => number;
  getWeekdays: () => string[];
  getMonths: () => string[];
}
