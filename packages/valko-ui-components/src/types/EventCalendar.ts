import type { Variants, ColorsWithSurface, Sizes, Shapes } from './common'
import type { EventCalendarSlots } from '../styles/EventCalendar.styles'

export type ViewMode = 'day' | 'week' | 'month'

export interface Timezone {
  id: string;
  name?: string;
  abbreviation?: string;
  offset?: number;
  display?: string[];
}

export interface CalendarEvent {
  id: string;
  start: Date;
  end: Date;
  title?: string;
  color?: string;
  location?: string;
  custom?: Record<string, unknown>;
}

export interface EventCalendarAdapterOptions {
  currentDate?: Date;
  timezones?: {
    locale?: Timezone;
    extras?: Timezone[];
  };
  hourRange?: [number, number];
}

export interface EventAdapterResult {
  timezones: {
    locale: Timezone;
    extras: Timezone[];
  };
  hourRange: [number, number];
}

export interface EventCalendarHeaderProps extends Variants, ColorsWithSurface, Sizes, Shapes {
  modelValue?: Date;
  currentView?: ViewMode;
  showWeekends?: boolean;
  styleSlots?: Partial<EventCalendarSlots>;
}

export interface EventCalendarHeaderEmits {
  (e: 'previousClick'): void;
  (e: 'nextClick'): void;
  (e: 'todayClick'): void;
  (e: 'viewChange', view: ViewMode): void;
}

export interface EventCalendarProps extends Variants, ColorsWithSurface, Sizes, Shapes {
  adapter: EventAdapterResult;
  events: CalendarEvent[];
  modelValue?: Date;
  showWeekends?: boolean;
  currentView?: ViewMode;
  hideHeader?: boolean;
  styleSlots?: Partial<EventCalendarSlots>;
}

export interface EventCalendarEmits {
  (e: 'eventClick', event: CalendarEvent): void;
  (e: 'update:currentView', view: ViewMode): void;
  (e: 'update:modelValue', date: Date): void;
  (e: 'previousClick'): void;
  (e: 'nextClick'): void;
  (e: 'todayClick'): void;
}

export interface DayViewProps extends Omit<EventCalendarProps, 'currentView' | 'hideHeader'> {
  placeholder?: string;
}

export interface DayViewEmits {
  (e: 'eventClick', event: CalendarEvent): void;
}

export interface WeekViewProps extends Omit<EventCalendarProps, 'currentView' | 'hideHeader'> {
  placeholder?: string;
}

export interface WeekViewEmits {
  (e: 'eventClick', event: CalendarEvent): void;
}

export interface MonthViewProps extends Omit<EventCalendarProps, 'currentView' | 'hideHeader'> {
  placeholder?: string;
}

export interface MonthViewEmits {
  (e: 'eventClick', event: CalendarEvent): void;
}
