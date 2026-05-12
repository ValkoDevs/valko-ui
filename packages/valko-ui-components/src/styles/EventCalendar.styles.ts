import { tv } from 'tailwind-variants'

const eventCalendar = tv({
  slots: {
    container: [
      'vk-event-calendar'
    ],
    headerContainer: [
      'vk-event-calendar-header',
      'w-full',
      'flex',
      'flex-wrap',
      'items-center',
      'justify-between',
      'gap-2',
      'border-b',
      'border-outlined',
      'px-3',
      'py-2'
    ],
    headerNavGroup: [
      'vk-event-calendar-header-nav',
      'flex',
      'items-center',
      'gap-1'
    ],
    headerTitle: [
      'vk-event-calendar-header-title',
      'flex-1',
      'text-center',
      'font-semibold',
      'text-on-surface',
      'select-none',
      'truncate'
    ],
    headerViewSwitcher: [
      'vk-event-calendar-header-view-switcher',
      'flex',
      'items-center',
      'gap-1'
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
      'font-medium',
      'text-on-surface',
      'mb-0.5'
    ],
    monthEvent: [
      'vk-event-month-event',
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
    moreIndicator: [
      'vk-event-more-indicator',
      'text-xs',
      'text-on-surface/60',
      'cursor-pointer',
      'hover:text-on-surface',
      'transition-colors',
      'duration-150',
      'select-none'
    ],
    timezoneHeader: [
      'vk-event-tz-header',
      'text-on-surface',
      'font-semibold',
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
      'p-2',
      'mx-1',
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
      filled: {
        dayViewContainer: ['bg-surface-container'],
        weekViewContainer: ['bg-surface-container'],
        monthViewContainer: ['bg-surface-container']
      },
      outlined: {
        container: ['border', 'border-outlined', 'rounded-lg'],
        event: [
          'bg-transparent',
          'shadow-none',
          'border-2',
          'data-[color=primary]:!bg-transparent',
          'data-[color=primary]:border-primary',
          'data-[color=primary]:!text-primary',
          'data-[color=secondary]:!bg-transparent',
          'data-[color=secondary]:border-secondary',
          'data-[color=secondary]:!text-secondary',
          'data-[color=positive]:!bg-transparent',
          'data-[color=positive]:border-positive',
          'data-[color=positive]:!text-positive',
          'data-[color=accent]:!bg-transparent',
          'data-[color=accent]:border-accent',
          'data-[color=accent]:!text-accent',
          'data-[color=warning]:!bg-transparent',
          'data-[color=warning]:border-warning',
          'data-[color=warning]:!text-warning',
          'data-[color=negative]:!bg-transparent',
          'data-[color=negative]:border-negative',
          'data-[color=negative]:!text-negative',
          'data-[color=surface]:!bg-transparent',
          'data-[color=surface]:border-surface',
          'data-[color=surface]:!text-on-surface'
        ],
        monthEvent: [
          'bg-transparent',
          'border-l-2',
          'data-[color=primary]:!bg-transparent',
          'data-[color=primary]:border-primary',
          'data-[color=primary]:!text-primary',
          'data-[color=secondary]:!bg-transparent',
          'data-[color=secondary]:border-secondary',
          'data-[color=secondary]:!text-secondary',
          'data-[color=positive]:!bg-transparent',
          'data-[color=positive]:border-positive',
          'data-[color=positive]:!text-positive',
          'data-[color=accent]:!bg-transparent',
          'data-[color=accent]:border-accent',
          'data-[color=accent]:!text-accent',
          'data-[color=warning]:!bg-transparent',
          'data-[color=warning]:border-warning',
          'data-[color=warning]:!text-warning',
          'data-[color=negative]:!bg-transparent',
          'data-[color=negative]:border-negative',
          'data-[color=negative]:!text-negative',
          'data-[color=surface]:!bg-transparent',
          'data-[color=surface]:border-surface',
          'data-[color=surface]:!text-on-surface'
        ]
      },
      ghost: {
        headerContainer: ['border-none'],
        event: [
          'bg-transparent',
          'shadow-none',
          'border-none',
          'data-[color=primary]:!bg-transparent',
          'data-[color=primary]:!text-primary',
          'data-[color=secondary]:!bg-transparent',
          'data-[color=secondary]:!text-secondary',
          'data-[color=positive]:!bg-transparent',
          'data-[color=positive]:!text-positive',
          'data-[color=accent]:!bg-transparent',
          'data-[color=accent]:!text-accent',
          'data-[color=warning]:!bg-transparent',
          'data-[color=warning]:!text-warning',
          'data-[color=negative]:!bg-transparent',
          'data-[color=negative]:!text-negative',
          'data-[color=surface]:!bg-transparent',
          'data-[color=surface]:!text-on-surface'
        ],
        monthEvent: [
          'bg-transparent',
          'data-[color=primary]:!bg-transparent',
          'data-[color=primary]:!text-primary',
          'data-[color=secondary]:!bg-transparent',
          'data-[color=secondary]:!text-secondary',
          'data-[color=positive]:!bg-transparent',
          'data-[color=positive]:!text-positive',
          'data-[color=accent]:!bg-transparent',
          'data-[color=accent]:!text-accent',
          'data-[color=warning]:!bg-transparent',
          'data-[color=warning]:!text-warning',
          'data-[color=negative]:!bg-transparent',
          'data-[color=negative]:!text-negative',
          'data-[color=surface]:!bg-transparent',
          'data-[color=surface]:!text-on-surface'
        ],
        hourCell: ['border-dashed'],
        monthDayCell: ['border-dashed'],
        monthDayCellToday: ['border-dashed'],
        monthDayCellOutside: ['border-dashed'],
        weekDayHeader: ['border-dashed'],
        weekDayHeaderToday: ['border-dashed'],
        monthWeekdayHeader: ['border-dashed'],
        timezoneHeader: ['border-dashed'],
        timezoneHourLabel: ['border-dashed']
      }
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
      xs: {
        headerTitle: ['text-[10px]'],
        weekDayHeader: ['text-[10px]'],
        weekDayHeaderToday: ['text-[10px]'],
        monthWeekdayHeader: ['text-[10px]'],
        monthDayNumber: ['text-[9px]'],
        monthEvent: ['text-[9px]'],
        moreIndicator: ['text-[8px]'],
        timezoneHeader: ['text-[10px]'],
        timezoneHourLabel: ['text-[9px]'],
        eventColumnHeader: ['text-[10px]'],
        event: ['text-[9px]']
      },
      sm: {
        headerTitle: ['text-xs'],
        weekDayHeader: ['text-xs'],
        weekDayHeaderToday: ['text-xs'],
        monthWeekdayHeader: ['text-xs'],
        monthDayNumber: ['text-[10px]'],
        monthEvent: ['text-[10px]'],
        moreIndicator: ['text-[10px]'],
        timezoneHeader: ['text-xs'],
        timezoneHourLabel: ['text-[10px]'],
        eventColumnHeader: ['text-xs'],
        event: ['text-[10px]']
      },
      md: {
        headerTitle: ['text-sm'],
        weekDayHeader: ['text-sm'],
        weekDayHeaderToday: ['text-sm'],
        monthWeekdayHeader: ['text-sm'],
        monthDayNumber: ['text-xs'],
        monthEvent: ['text-xs'],
        moreIndicator: ['text-xs'],
        timezoneHeader: ['text-sm'],
        timezoneHourLabel: ['text-xs'],
        eventColumnHeader: ['text-sm'],
        event: ['text-xs']
      },
      lg: {
        headerTitle: ['text-base'],
        weekDayHeader: ['text-base'],
        weekDayHeaderToday: ['text-base'],
        monthWeekdayHeader: ['text-base'],
        monthDayNumber: ['text-sm'],
        monthEvent: ['text-sm'],
        moreIndicator: ['text-sm'],
        timezoneHeader: ['text-base'],
        timezoneHourLabel: ['text-sm'],
        eventColumnHeader: ['text-base'],
        event: ['text-sm']
      }
    },
    shape: {
      rounded: {
        event: ['rounded-xl'],
        monthEvent: ['rounded-xl']
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
