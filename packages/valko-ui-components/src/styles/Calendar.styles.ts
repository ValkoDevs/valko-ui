import { tv } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-calendar'
    ],
    viewContainer: [
      'vk-calendar__view-container',
      'w-fit',
      'p-2',
      'flex',
      'flex-col',
      'gap-2',
      'group'
    ],
    headerContainer: [
      'vk-calendar__header-container',
      'w-fit',
      'flex',
      'gap-2',
      'grow',
      'items-stretch',
      'justify-center'
    ],
    arrows: [
      'vk-calendar__arrows',
      'px-1'
    ],
    periodButton: [
      'vk-calendar__period-button',
      'h-full',
      'grow'
    ],
    panel: [
      'vk-calendar__panel',
      'grid',
      'gap-2',
      'group-data-[current-view=days]:grid-cols-7',
      'group-data-[current-view=days]:grid-rows-7',
      'group-data-[current-view=months]:grid-cols-9',
      'group-data-[current-view=months]:grid-rows-4',
      'group-data-[current-view=years]:grid-cols-4',
      'group-data-[current-view=years]:grid-rows-5'
    ],
    gridButton: [
      'vk-calendar__grid-button',
      'truncate',
      'mx-auto',
      'group-data-[current-view=days]:col-span-1',
      'group-data-[current-view=months]:col-span-3',
      'group-data-[current-view=years]:col-span-1'
    ],
    hiddenGridButton: [
      'block',
      'relative',
      'before:content-[""]',
      'before:block',
      'before:w-full',
      'before:h-full',
      'before:opacity-0',
      'before:pointer-events-none'
    ],
    weekdaySpan: [
      'font-bold',
      'text-center',
      'flex',
      'justify-center',
      'items-center'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'vk-calendar__filled'
        ]
      },
      ghost: {
        container: [
          'vk-calendar__ghost'
        ]
      },
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
      xs: {
        headerContainer: [
          'w-52',
          'text-xs'
        ],
        panel: [
          'w-52',
          'text-xs'
        ],
        gridButton: [
          'group-data-[current-view=days]:size-6',
          'group-data-[current-view=months]:w-7',
          'group-data-[current-view=months]:h-5',
          'group-data-[current-view=years]:w-8',
          'group-data-[current-view=years]:h-6'
        ]
      },
      sm: {
        headerContainer: [
          'w-56',
          'text-sm'
        ],
        panel: [
          'w-56',
          'text-sm'
        ],
        gridButton: [
          'group-data-[current-view=days]:size-7',
          'group-data-[current-view=months]:w-9',
          'group-data-[current-view=months]:h-7',
          'group-data-[current-view=years]:w-10',
          'group-data-[current-view=years]:h-8'
        ]
      },
      md: {
        headerContainer: [
          'w-60',
          'text-base'
        ],
        panel: [
          'w-60',
          'text-base'
        ],
        gridButton: [
          'group-data-[current-view=days]:size-7',
          'group-data-[current-view=months]:w-10',
          'group-data-[current-view=months]:h-8',
          'group-data-[current-view=years]:w-11',
          'group-data-[current-view=years]:h-9'
        ]
      },
      lg: {
        headerContainer: [
          'w-72',
          'text-lg'
        ],
        panel: [
          'w-72',
          'text-lg'
        ],
        gridButton: [
          'group-data-[current-view=days]:size-8',
          'group-data-[current-view=months]:w-11',
          'group-data-[current-view=months]:h-9',
          'group-data-[current-view=years]:w-12',
          'group-data-[current-view=years]:h-10'
        ]
      }
    },
    shape: {
      soft: {},
      square: {},
      rounded: {}
    }
  }
})
