import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-datepicker__calendar',
      'p-2',
      'grid',
      'gap-2',
      'grid-rows-auto'
    ],
    dateInput: [
      'vk-datepicker__input'
    ],
    actionsBar: [
      'grid',
      'gap-1',
      'items-center',
      'justify-center',
      'data-[view=days]:grid-cols-7',
      'data-[view=months]:grid-cols-9',
      'data-[view=years]:grid-cols-8'
    ],
    viewsButton: [
      'h-full',
      'text-center',
      'items-center',
      'justify-center',
      'data-[view=days]:col-span-1',
      'data-[view=months]:col-span-3',
      'data-[view=years]:col-span-2'
    ],
    hiddenDay: [
      'block',
      'relative',
      'before:content-[""]',
      'before:block',
      'before:w-full',
      'before:h-full',
      'before:opacity-0',
      'before:pointer-events-none'
    ],
    views: [
      'grid',
      'gap-2',
      'justify-center',
      'items-center',
      'data-[view=days]:grid-cols-7',
      'data-[view=days]:grid-rows-7',
      'data-[view=months]:grid-cols-9',
      'data-[view=months]:grid-rows-4',
      'data-[view=years]:grid-cols-8',
      'data-[view=years]:grid-rows-3'
    ],
    weekDaysSpan: [
      'font-bold',
      'text-center',
      'flex',
      'justify-center',
      'items-center'
    ],
    arrows: [
      'h-full',
      'items-center',
      'justify-center',
      'data-[view=days]:col-span-1',
      'data-[view=months]:col-span-2',
      'data-[view=years]:col-span-1'
    ],
    mainButton: [
      'h-full',
      'flex',
      'items-center',
      'data-[view=days]:col-span-5',
      'data-[view=months]:col-span-5',
      'data-[view=years]:col-span-6'
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
        actionsBar: [
          'w-52',
          'text-xs'
        ],
        views: [
          'w-52',
          'text-xs'
        ]
      },
      sm: {
        actionsBar: [
          'w-56',
          'text-sm'
        ],
        views: [
          'w-56',
          'text-sm'
        ]
      },
      md: {
        actionsBar: [
          'w-60',
          'text-base'
        ],
        views: [
          'w-60',
          'text-base'
        ]
      },
      lg: {
        actionsBar: [
          'w-72',
          'text-lg'
        ],
        views: [
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
