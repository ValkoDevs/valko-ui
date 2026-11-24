import type { ComputedRef, Ref } from 'vue'
import type { DateValue } from '@internationalized/date'

export type { DateValue } from '@internationalized/date'
import type { Sizes, ColorsWithSurface, Variants, Shapes } from './common'
import type { CalendarSlots } from '../styles/Calendar.styles'

export type DisplayView = 'days' | 'months' | 'years'
export type SelectionType = 'full' | 'month-only' | 'year-only' | 'day-month' | 'month-year'
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6
export type AdapterProps = Pick<CalendarProps, 'minDate' | 'maxDate' | 'format' | 'disabledDates' | 'locale' | 'disableWeekends'>
export type AdapterResult = [
  Ref<DateValue>,
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

/** One rendered month of the Reka calendar grid. */
export interface DayGrid {
  value: DateValue;
  rows: DateValue[][];
}

export interface CalendarProps extends Sizes, ColorsWithSurface, Variants, Shapes {
  adapter: CalendarAdapter;
  modelValue: DateValue;
  locale?: string;
  format?: string;
  disabledDates?: DateValue[];
  disableWeekends?: boolean;
  minDate?: DateValue;
  maxDate?: DateValue;
  calendarLabel?: string;
  styleSlots?: Partial<CalendarSlots>;
}

export interface CalendarDayViewProps extends CalendarProps {
  grid: DayGrid;
  weekDays: string[];
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
  isDateDisabled: (date: DateValue) => boolean;
  onSelectDay: (day: number) => DateValue;
  onSelectMonth: (month: number) => DateValue;
  onSelectYear: (year: number) => DateValue;
  onPlaceholderChange: (date: DateValue) => void;
  getWeekdays: () => string[];
  getMonths: () => string[];
}
