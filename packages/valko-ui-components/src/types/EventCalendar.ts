import type { Variants, ColorsWithSurface, Sizes, Shapes } from './common'
import type { EventCalendarSlots } from '../styles/EventCalendar.styles'

export type ViewMode = 'day' | 'week' | 'month'

export interface Timezone {
  id: string; // IANA timezone identifier, e.g., "America/New_York"
  name?: string; // Human-readable name, e.g., "Eastern Time (US & Canada)"
  abbreviation?: string; // Short abbreviation, e.g., "EST" maybe if needed for display purposes
  offset?: number; // UTC offset in minutes, e.g., -300 for EST (UTC-5) maybe could be calculated from the id but could be useful to have it directly for sorting or display purposes
  display?: string[];
}

export interface Event {
  id?: string,
  start: Date,
  end: Date,
  title?: string,
  color?: string,
  location?: string,
  custom?: Record<string, string>
}

export interface EventCalendarAdapter {
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
  hourRange?: [number, number];
}

export interface EventCalendarProps extends Variants, ColorsWithSurface, Sizes, Shapes {
  adapter: EventAdapterResult;
  events: Event[];
  modelValue?: Date;
  showWeekends?: boolean;
  currentView?: ViewMode;
  styleSlots?: Partial<EventCalendarSlots>;
  onEventClick?: (event: Event) => void;
  onViewChange?: (view: ViewMode) => void;
}

export interface DayViewProps extends EventCalendarProps {
  placeholder?: string;
}
