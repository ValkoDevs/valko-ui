import { DefaultComponent } from './common'

export interface Event {
  id: string;
  start: EpochTimeStamp;
  end: EpochTimeStamp;
  title: string;
  color?: string;
  location?: string;
  custom?: Record<string, string>;
}

export interface FullCalendarProps extends DefaultComponent {
  events?: Event[];
  timezones?: string[];
}

//export interface FullCalendarDayViewProps extends FullCalendarProps {}

export interface FullCalendarWeekViewProps extends FullCalendarProps {
  noWeekends?: boolean;
}
