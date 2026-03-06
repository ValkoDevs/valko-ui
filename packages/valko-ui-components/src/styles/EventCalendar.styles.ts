import { tv } from 'tailwind-variants'

const eventCalendar = tv({
  slots: {
    container: [
      'vk-event-calendar'
    ],
    dayViewContainer: [
      'vk-event-day-view',
      'grid',
      'grid-cols-10', // default 10 columns, will be overridden inline for dynamic
      'gap-2',
      'w-full',
      'h-full'
    ],
    timezoneContainer: [
      'vk-event-tz-container',
      'col-span-2', // default span, will be overridden inline
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'gap-1'
    ],
    timezone: [
      'vk-event-tz',
      'flex',
      'flex-col',
      'items-center',
      'gap-1'
    ],
    eventContainer: [
      'vk-event-event-container',
      'col-span-8', // default span, will be overridden inline
      'flex',
      'flex-col',
      'w-full',
      'h-full',
      'gap-2'
    ],
    event: [
      'vk-event-event',
      'rounded',
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
      'data-[color=surface]:text-on-surface',
      'p-2',
      'shadow-sm'
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
      rounded: {},
      soft: {},
      square: {}
    }
  },
  compoundVariants: []
})

export default eventCalendar
export type EventCalendarSlots = typeof eventCalendar.slots
