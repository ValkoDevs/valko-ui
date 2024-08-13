import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'overflow-hidden'
    ],
    thead: [],
    th: [
      'px-4',
      'py-2',
      'text-left'
    ],
    tr: [],
    td: [
      'px-4',
      'py-2',
      'text-left'
    ],
    noDataMessage: [
      'p-4',
      'text-center'
    ],
    body: [],
    shape: []
  },
  variants: {
    variant: {
      filled: {
        thead: [
          'border-b',
          'dark:border-dark-3',
          'bg-light-4',
          'dark:bg-dark-2'
        ],
        td: [
          'border-t',
          'border-light-4',
          'dark:border-dark-4'
        ],
        tr: [
          'bg-light-2/[.5]',
          'dark:bg-dark-3'
        ]
      },
      outlined: {
        thead: [
          'border-b',
          'border-dark-4',
          'dark:border-light-4'
        ],
        tr: [
          'border-b',
          'border-dark-1/[.1]',
          'dark:border-light-4/[.1]'
        ]
      },
      ghost: {
        thead: [
          'bg-light-4/[.60]',
          'dark:bg-dark-2/[.30]'
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
    }
  },
  compoundVariants: [
    // striped & variant
    {
      variant: 'filled',
      striped: true,
      class: {
        tr: [
          'even:bg-light-3/[.8]',
          'dark:even:bg-dark-3/[.5]'
        ]
      }
    },
    {
      variant: 'outlined',
      striped: true,
      class: {
        tr: [
          'even:bg-light-3/[.5]',
          'dark:even:bg-dark-3/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      striped: true,
      class: {
        tr: [
          'even:bg-light-3/[.5]',
          'dark:even:bg-dark-3/[.5]'
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
    }
  ]
}) as unknown as ReturnType<TV>
