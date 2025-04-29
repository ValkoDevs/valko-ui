import { tv, type TV } from 'tailwind-variants'

export default tv({
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
    shape: [],
    tableFooter: [
      'vk-table_footer'
    ]
  },
  variants: {
    variant: {
      filled: {
        thead: [
          'border-b',
          'dark:border-outlined',
          'bg-surface-container'
        ],
        td: [
          'border-t',
          'border-outlined'
        ],
        tr: [
          'bg-surface-container-high'
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
          'bg-outlined-variant'
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
          'even:bg-surface-container-highest'
        ]
      }
    },
    {
      variant: 'outlined',
      striped: true,
      class: {
        tr: [
          'even:bg-surface-container-highest/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      striped: true,
      class: {
        tr: [
          'even:bg-surface-container-highest/[.5]'
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
          'data-[selected=true]:bg-primary-container',
          'dark:data-[selected=true]:bg-primary-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        tr: [
          'data-[selected=true]:bg-secondary-cbg-primary-container',
          'dark:data-[selected=true]:bg-secondary-cbg-primary-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        tr: [
          'data-[selected=true]:bg-positive-container',
          'dark:data-[selected=true]:bg-positive-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        tr: [
          'data-[selected=true]:bg-accent-container',
          'dark:data-[selected=true]:bg-accent-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        tr: [
          'data-[selected=true]:bg-warning-container',
          'dark:data-[selected=true]:bg-warning-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        tr: [
          'data-[selected=true]:bg-negative-container',
          'dark:data-[selected=true]:bg-negative-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'primary',
      class: {
        tr: [
          'data-[selected=true]:bg-on-primary-container',
          'dark:data-[selected=true]:bg-on-primary-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'secondary',
      class: {
        tr: [
          'data-[selected=true]:bg-on-secondary-container',
          'dark:data-[selected=true]:bg-on-secondary-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'positive',
      class: {
        tr: [
          'data-[selected=true]:bg-on-positive-container',
          'dark:data-[selected=true]:bg-on-positive-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'accent',
      class: {
        tr: [
          'data-[selected=true]:bg-on-accent-container',
          'dark:data-[selected=true]:bg-on-accent-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'warning',
      class: {
        tr: [
          'data-[selected=true]:bg-on-warning-container',
          'dark:data-[selected=true]:bg-on-warning-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'negative',
      class: {
        tr: [
          'data-[selected=true]:bg-on-negative-container',
          'dark:data-[selected=true]:bg-on-negative-container'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
