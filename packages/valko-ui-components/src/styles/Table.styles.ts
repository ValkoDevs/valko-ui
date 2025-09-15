import { tv } from 'tailwind-variants'

const table = tv({
  slots: {
    container: [
      'w-full',
      'overflow-x-auto'
    ],
    table: [
      'vk-table',
      'w-full',
      'overflow-hidden'
    ],
    thead: [
      'vk-table__thead'
    ],
    th: [
      'px-4',
      'py-2',
      'text-left'
    ],
    tr: [
      'vk-table__tr',
      'hover:bg-surface-container-high',
      'data-[row-events=true]:cursor-pointer'
    ],
    td: [
      'px-4',
      'py-2',
      'text-left'
    ],
    noDataMessage: [
      'vk-table__no_data_message',
      'p-4',
      'text-center'
    ],
    body: [],
    tableFooter: [
      'vk-table_footer'
    ]
  },
  variants: {
    variant: {
      filled: {
        thead: [
          'border-b',
          'border-outlined',
          'bg-surface-container-highest'
        ],
        td: [
          'border-t',
          'border-outlined'
        ],
        tr: [
          'bg-surface-container-low'
        ]
      },
      outlined: {
        thead: [
          'border-b',
          'border-outlined'
        ],
        tr: [
          'border-b',
          'border-outlined'
        ]
      },
      ghost: {
        thead: [
          'bg-surface-container-highest/[.5]'
        ]
      }
    },
    shape: {
      rounded: {
        table: [
          'rounded-xl'
        ]
      },
      soft: {
        table: [
          'rounded-lg'
        ]
      },
      square: {
        table: [
          'rounded-none'
        ]
      }
    },
    size: {
      xs: {
        table: [
          'text-xs'
        ]
      },
      sm: {
        table: [
          'text-sm'
        ]
      },
      md: {
        table: [
          'text-base'
        ]
      },
      lg: {
        table: [
          'text-lg'
        ]
      }
    },
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {}
    }
  },
  compoundVariants: [
    // striped & variant
    {
      variant: 'filled',
      striped: true,
      class: {
        tr: [
          'even:bg-surface-container'
        ]
      }
    },
    {
      variant: ['outlined', 'ghost'],
      striped: true,
      class: {
        tr: [
          'even:bg-surface-container/[.5]'
        ]
      }
    },
    // outlined & shape
    {
      variant: 'outlined',
      shape: ['rounded', 'soft'],
      class: {
        table: [
          'rounded-none'
        ]
      }
    },
    // variant & color
    {
      variant: 'filled',
      color: 'primary',
      class: {
        tr: [
          'data-[selected=true]:bg-primary-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        tr: [
          'data-[selected=true]:bg-secondary-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        tr: [
          'data-[selected=true]:bg-positive-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        tr: [
          'data-[selected=true]:bg-accent-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        tr: [
          'data-[selected=true]:bg-warning-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        tr: [
          'data-[selected=true]:bg-negative-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'primary',
      class: {
        tr: [
          'data-[selected=true]:bg-primary-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'secondary',
      class: {
        tr: [
          'data-[selected=true]:bg-secondary-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'positive',
      class: {
        tr: [
          'data-[selected=true]:bg-positive-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'accent',
      class: {
        tr: [
          'data-[selected=true]:bg-accent-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'warning',
      class: {
        tr: [
          'data-[selected=true]:bg-warning-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'negative',
      class: {
        tr: [
          'data-[selected=true]:bg-negative-container'
        ]
      }
    }
  ]
})

export default table
export type TableSlots = typeof table.slots
