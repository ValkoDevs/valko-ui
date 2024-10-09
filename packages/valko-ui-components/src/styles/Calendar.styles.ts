import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-calendar'
    ],
    viewContainer: [
      'w-fit',
      'p-2',
      'flex',
      'flex-col',
      'gap-2',
      'group'
    ],
    headerContainer: [
      'w-fit',
      'flex',
      'gap-2',
      'grow',
      'items-stretch',
      'justify-center'
    ],
    arrows: [
      'px-1'
    ],
    periodButton: [
      'h-full',
      'grow'
    ],
    panel: [
      'w-fit',
      'grid',
      'gap-2',
      'justify-center',
      'items-center',
      'group-data-[current-view=days]:grid-cols-7',
      'group-data-[current-view=days]:grid-rows-7',
      'group-data-[current-view=months]:grid-cols-9',
      'group-data-[current-view=months]:grid-rows-4',
      'group-data-[current-view=years]:grid-cols-4',
      'group-data-[current-view=years]:grid-rows-5'
    ],
    gridButton: [
      'truncate',
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
      filled: {},
      ghost: {},
      outlined: {}
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      error: {}
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
        ]
      }
    },
    flat: {},
    shape: {
      soft: {},
      square: {},
      rounded: {}
    }
  }
}) as unknown as ReturnType<TV>
