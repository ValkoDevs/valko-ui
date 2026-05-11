import { tv } from 'tailwind-variants'

const eventCalendar = tv({
  slots: {
    container: [
      'vk-event-calendar'
    ],
    dayViewContainer: [
      'vk-event-day-view',
      'grid',
      'size-full'
    ],
    weekViewContainer: [
      'vk-event-week-view',
      'grid',
      'size-full'
    ],
    weekDayHeader: [
      'vk-event-week-day-header',
      'text-on-surface',
      'font-semibold',
      'text-sm',
      'border-b',
      'border-r',
      'border-outlined',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'px-2',
      'py-1',
      'gap-0.5'
    ],
    weekDayHeaderToday: [
      'vk-event-week-day-header-today',
      'text-on-surface',
      'font-semibold',
      'text-sm',
      'border-b',
      'border-r',
      'border-outlined',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'px-2',
      'py-1',
      'gap-0.5',
      'bg-surface'
    ],
    weekDayColumn: [
      'vk-event-week-day-column',
      'contents'
    ],
    monthViewContainer: [
      'vk-event-month-view',
      'grid',
      'size-full'
    ],
    monthWeekdayHeader: [
      'vk-event-month-weekday-header',
      'text-on-surface',
      'font-semibold',
      'text-sm',
      'border-b',
      'border-outlined',
      'flex',
      'items-center',
      'justify-center',
      'px-2',
      'py-1'
    ],
    monthDayCell: [
      'vk-event-month-day-cell',
      'border-b',
      'border-r',
      'border-outlined',
      'p-1',
      'min-h-24',
      'flex',
      'flex-col',
      'gap-0.5',
      'overflow-hidden'
    ],
    monthDayCellToday: [
      'vk-event-month-day-cell-today',
      'border-b',
      'border-r',
      'border-outlined',
      'p-1',
      'min-h-24',
      'flex',
      'flex-col',
      'gap-0.5',
      'overflow-hidden',
      'bg-surface'
    ],
    monthDayCellOutside: [
      'vk-event-month-day-cell-outside',
      'border-b',
      'border-r',
      'border-outlined',
      'p-1',
      'min-h-24',
      'flex',
      'flex-col',
      'gap-0.5',
      'overflow-hidden',
      'opacity-40'
    ],
    monthDayNumber: [
      'vk-event-month-day-number',
      'text-xs',
      'font-medium',
      'text-on-surface',
      'mb-0.5'
    ],
    monthEvent: [
      'vk-event-month-event',
      'text-xs',
      'px-1.5',
      'py-0.5',
      'truncate',
      'cursor-pointer',
      'transition-colors',
      'duration-150',
      'data-[color=primary]:bg-primary',
      'data-[color=primary]:text-on-primary',
      'data-[color=secondary]:bg-secondary',
      'data-[color=secondary]:text-on-secondary',
      'data-[color=positive]:bg-positive',
      'data-[color=positive]:text-on-positive',
      'data-[color=accent]:bg-accent',
      'data-[color=accent]:text-on-accent',
      'data-[color=warning]:bg-warning',
      'data-[color=warning]:text-on-warning',
      'data-[color=negative]:bg-negative',
      'data-[color=negative]:text-on-negative',
      'data-[color=surface]:bg-surface',
      'data-[color=surface]:text-on-surface'
    ],
    timezoneHeader: [
      'vk-event-tz-header',
      'text-on-surface',
      'font-semibold',
      'text-sm',
      'border-b',
      'border-r',
      'border-outlined',
      'flex',
      'items-center',
      'justify-center',
      'px-2',
      'py-1'
    ],
    timezoneHourLabel: [
      'vk-event-tz-hour-label',
      'flex',
      'justify-end',
      'items-start',
      'text-on-surface',
      'text-xs',
      'border-b',
      'border-r',
      'border-outlined',
      'px-2',
      'py-1'
    ],
    eventColumnHeader: [
      'vk-event-column-header',
      'text-on-surface',
      'font-semibold',
      'text-sm',
      'border-b',
      'border-outlined',
      'flex',
      'items-center',
      'justify-center',
      'px-2',
      'py-1'
    ],
    hourCell: [
      'vk-event-hour-cell',
      'border-b',
      'border-outlined'
    ],
    eventsArea: [
      'vk-event-events-area',
      'relative',
      'px-2'
    ],
    currentTimeMarker: [
      'vk-event-time-marker',
      'absolute',
      'left-0',
      'right-0',
      'h-0.5',
      'z-30',
      'pointer-events-none',
      'data-[color=primary]:bg-primary',
      'data-[color=secondary]:bg-secondary',
      'data-[color=positive]:bg-positive',
      'data-[color=accent]:bg-accent',
      'data-[color=warning]:bg-warning',
      'data-[color=negative]:bg-negative',
      'data-[color=surface]:bg-surface'
    ],
    currentTimeDot: [
      'vk-event-time-dot',
      'absolute',
      '-left-1.5',
      '-top-1',
      'size-2.5',
      'rounded-full',
      'data-[color=primary]:bg-primary',
      'data-[color=secondary]:bg-secondary',
      'data-[color=positive]:bg-positive',
      'data-[color=accent]:bg-accent',
      'data-[color=warning]:bg-warning',
      'data-[color=negative]:bg-negative',
      'data-[color=surface]:bg-surface'
    ],
    event: [
      'vk-event-event',
      'absolute',
      'inset-x-0',
      'p-2',
      'mx-4',
      'text-xs',
      'cursor-pointer',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'overflow-hidden',
      'truncate',
      'shadow-md',
      'border',
      'border-white/20',
      'data-[color=primary]:bg-primary',
      'data-[color=primary]:text-on-primary',
      'data-[color=secondary]:bg-secondary',
      'data-[color=secondary]:text-on-secondary',
      'data-[color=positive]:bg-positive',
      'data-[color=positive]:text-on-positive',
      'data-[color=accent]:bg-accent',
      'data-[color=accent]:text-on-accent',
      'data-[color=warning]:bg-warning',
      'data-[color=warning]:text-on-warning',
      'data-[color=negative]:bg-negative',
      'data-[color=negative]:text-on-negative',
      'data-[color=surface]:bg-surface',
      'data-[color=surface]:text-on-surface'
    ]
  },
  variants: {
    variant: {
      filled: {},
      ghost: {},
      outlined: {}
    },
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {},
      surface: {}
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {}
    },
    shape: {
      rounded: {
        event: ['rounded-full'],
        monthEvent: ['rounded-full']
      },
      soft: {
        event: ['rounded-lg'],
        monthEvent: ['rounded-md']
      },
      square: {}
    }
  },
  compoundVariants: []
})

export default eventCalendar
export type EventCalendarSlots = typeof eventCalendar.slots
