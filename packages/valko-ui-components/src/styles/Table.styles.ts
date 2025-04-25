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
      'hover:bg-light-300',
      'dark:hover:bg-dark-700',
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
          'dark:border-dark-800',
          'bg-light-300',
          'dark:bg-dark-700'
        ],
        td: [
          'border-t',
          'border-light-300',
          'dark:border-dark-900'
        ],
        tr: [
          'bg-light-100/[.5]',
          'dark:bg-dark-800'
        ]
      },
      outlined: {
        thead: [
          'border-b',
          'border-dark-900',
          'dark:border-light-300'
        ],
        tr: [
          'border-b',
          'border-dark-600/[.1]',
          'dark:border-light-300/[.1]'
        ]
      },
      ghost: {
        thead: [
          'bg-light-300/[.60]',
          'dark:bg-dark-700/[.30]'
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
          'even:bg-light-200/[.8]',
          'dark:even:bg-dark-800/[.5]'
        ]
      }
    },
    {
      variant: 'outlined',
      striped: true,
      class: {
        tr: [
          'even:bg-light-200/[.5]',
          'dark:even:bg-dark-800/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      striped: true,
      class: {
        tr: [
          'even:bg-light-200/[.5]',
          'dark:even:bg-dark-800/[.5]'
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
          'data-[selected=true]:bg-primary-500/[.3]',
          'dark:data-[selected=true]:bg-primary-500/[.3]'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        tr: [
          'data-[selected=true]:bg-dark-600/[.3]',
          'dark:data-[selected=true]:bg-light-100/[.3]'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        tr: [
          'data-[selected=true]:bg-positive',
          'dark:data-[selected=true]:bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        tr: [
          'data-[selected=true]:bg-accent',
          'dark:data-[selected=true]:bg-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        tr: [
          'data-[selected=true]:bg-warning',
          'dark:data-[selected=true]:bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        tr: [
          'data-[selected=true]:bg-negative',
          'dark:data-[selected=true]:bg-negative'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'primary',
      class: {
        tr: [
          'data-[selected=true]:bg-primary-500/[.1]',
          'dark:data-[selected=true]:bg-primary-500/[.1]'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'secondary',
      class: {
        tr: [
          'data-[selected=true]:bg-dark-600/[.3]',
          'dark:data-[selected=true]:bg-light-100/[.3]'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'positive',
      class: {
        tr: [
          'data-[selected=true]:bg-positive',
          'dark:data-[selected=true]:bg-positive'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'accent',
      class: {
        tr: [
          'data-[selected=true]:bg-accent',
          'dark:data-[selected=true]:bg-accent'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'warning',
      class: {
        tr: [
          'data-[selected=true]:bg-warning',
          'dark:data-[selected=true]:bg-warning'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'negative',
      class: {
        tr: [
          'data-[selected=true]:bg-negative',
          'dark:data-[selected=true]:bg-negative'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
