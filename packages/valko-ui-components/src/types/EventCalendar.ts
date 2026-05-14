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

export interface EventPlacement {
  topPercent: number;
  heightPercent: number;
  leftPercent: number;
  widthPercent: number;
  zIndex: number;
  isOverlapping: boolean;
}

export interface MonthDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
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
  isSameDay: (a: Date, b: Date) => boolean;
  getMonday: (date: Date) => Date;
  getTimezoneLabel: (tz: Timezone) => string;
  getTimezoneFullName: (tz: Timezone) => string;
  formatDayHeader: (date: Date) => string;
  isToday: (date: Date, now: Date) => boolean;
  getHours: () => number[];
  getWeekDays: (date: Date, showWeekends: boolean) => Date[];
  getEventsForDay: (events: CalendarEvent[], day: Date) => CalendarEvent[];
  getMonthGrid: (date: Date, today: Date, showWeekends: boolean) => MonthDay[][];
  getEventPlacements: (events: CalendarEvent[]) => Map<string, EventPlacement>;
  getStackedEventPlacements: (events: CalendarEvent[]) => Map<string, EventPlacement>;
  getCurrentTimePosition: (now: Date) => number;
  isCurrentTimeInRange: (now: Date) => boolean;
  getDateLabel: (date: Date, view: ViewMode, showWeekends: boolean) => string;
  getPreviousDate: (date: Date, view: ViewMode) => Date;
  getNextDate: (date: Date, view: ViewMode) => Date;
  snapToQuarterHour: (date: Date) => Date;
  getTimeFromPosition: (positionPercent: number) => { hour: number; minute: number };
}

export interface EventCalendarHeaderProps extends Variants, ColorsWithSurface, Sizes, Shapes {
  modelValue?: Date;
  currentView?: ViewMode;
  showWeekends?: boolean;
  adapter: EventAdapterResult;
  styleSlots?: Partial<EventCalendarSlots>;
}

export interface EventCalendarProps extends Variants, ColorsWithSurface, Sizes, Shapes {
  adapter: EventAdapterResult;
  events: CalendarEvent[];
  modelValue?: Date;
  showWeekends?: boolean;
  currentView?: ViewMode;
  hideHeader?: boolean;
  draggable?: boolean;
  resizable?: boolean;
  styleSlots?: Partial<EventCalendarSlots>;
}

export type ViewProps = Omit<EventCalendarProps, 'currentView' | 'hideHeader'>

export interface EventDropPayload {
  event: CalendarEvent;
  originalStart: Date;
  originalEnd: Date;
  newStart: Date;
  newEnd: Date;
}

export interface EventResizePayload {
  event: CalendarEvent;
  originalStart: Date;
  originalEnd: Date;
  newStart: Date;
  newEnd: Date;
}
