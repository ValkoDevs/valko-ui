import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    table: [
      'vk-data-table',
      'w-full',
      'shadow-md',
      'table-fixed'
    ],
    thead: [],
    th: [
      'px-4',
      'py-2'
    ],
    tr: [],
    td: [
      'px-4',
      'py-2',
      'text-left'
    ],
    body: []
  },
  variants: {
    color: {
      primary: {},
      secondary: {},
      success: {},
      info: {},
      warning: {},
      error: {},
      light: {},
      dark: {},
      neutral: {}
    },
    variant: {
      filled: {
        thead: [
          'text-white',
          'border-b',
          'dark:border-dark-3'
        ],
        tr: [
          'text-white',
          'border-b',
          'dark:border-dark-3'
        ]
      },
      outlined: {
        table: [
          'border-2'
        ],
        thead: [
          'border-b'
        ],
        tr: [
          'border-b'
        ]
      },
      ghost: {}
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
    flat: {
      true: {
        table: [
          'shadow-none'
        ]
      }
    },
    sortDir: {
      asc: {
        body: [
          'flex-col'
        ]
      },
      desc: {
        body: [
          'flex-col-reverse'
        ]
      }
    },
    layout: {
      auto: {
        table: [
          'table-auto'
        ]
      },
      fixed: {
        table: [
          'table-fixed'
        ]
      }
    }
  },
  compoundVariants: [
    // filled & color
    {
      variant: 'filled',
      color: 'primary',
      class: {
        table: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        table: [
          'bg-secondary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        table: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        table: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        table: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        table: [
          'bg-error-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'light',
      class: {
        table: [
          'bg-light-3'
        ],
        thead: [
          'text-black'
        ],
        tr: [
          'text-black'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'dark',
      class: {
        table: [
          'bg-dark-3'
        ],
        thead: [
          'text-white'
        ],
        tr: [
          'text-white'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'neutral',
      class: {
        table: [
          'bg-light-3',
          'dark:bg-dark-3'
        ],
        thead: [
          'text-black',
          'border-light-2',
          'dark:border-dark-4',
          'dark:text-white'
        ],
        tr: [
          'text-black',
          'border-light-2',
          'dark:border-dark-4',
          'dark:text-white'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        table: [
          'border-primary-500'
        ],
        thead: [
          'text-primary-500',
          'border-primary-500'
        ],
        tr: [
          'text-primary-500',
          'border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        table: [
          'border-secondary-500'
        ],
        thead: [
          'text-secondary-500',
          'border-secondary-500'
        ],
        tr: [
          'text-secondary-500',
          'border-secondary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        table: [
          'border-success-500'
        ],
        thead: [
          'text-success-500',
          'border-success-500'
        ],
        tr: [
          'text-success-500',
          'border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        table: [
          'border-info-500'
        ],
        thead: [
          'text-info-500',
          'border-info-500'
        ],
        tr: [
          'text-info-500',
          'border-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        table: [
          'border-warning-500'
        ],
        thead: [
          'text-warning-500',
          'border-warning-500'
        ],
        tr: [
          'text-warning-500',
          'border-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        table: [
          'border-error-500'
        ],
        thead: [
          'text-error-500',
          'border-error-500'
        ],
        tr: [
          'text-error-500',
          'border-error-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'light',
      class: {
        table: [
          'border-light-3'
        ],
        thead: [
          'text-light-3',
          'border-light-3'
        ],
        tr: [
          'text-light-3',
          'border-light-3'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'dark',
      class: {
        table: [
          'border-dark-3'
        ],
        thead: [
          'text-dark-3',
          'border-dark-3'
        ],
        tr: [
          'text-dark-3',
          'border-dark-3'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      class: {
        table: [
          'border-light-3',
          'dark:border-dark-3'
        ],
        thead: [
          'text-black',
          'border-light-3',
          'dark:border-dark-3',
          'dark:text-white'
        ],
        tr: [
          'text-black',
          'border-light-3',
          'dark:border-dark-3',
          'dark:text-white'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        table: [
          'bg-primary-500/[.20]'
        ],
        thead: [
          'text-primary-500'
        ],
        tr: [
          'text-primary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        table: [
          'bg-secondary-500/[.20]'
        ],
        thead: [
          'text-secondary-500'
        ],
        tr: [
          'text-secondary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        table: [
          'bg-success-500/[.20]'
        ],
        thead: [
          'text-success-500'
        ],
        tr: [
          'text-success-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        table: [
          'bg-info-500/[.20]'
        ],
        thead: [
          'text-info-500'
        ],
        tr: [
          'text-info-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        table: [
          'bg-warning-500/[.20]'
        ],
        thead: [
          'text-warning-500'
        ],
        tr: [
          'text-warning-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        table: [
          'bg-error-500/[.20]'
        ],
        thead: [
          'text-error-500'
        ],
        tr: [
          'text-error-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'light',
      class: {
        table: [
          'bg-light-3/[.20]'
        ],
        thead: [
          'text-light-3'
        ],
        tr: [
          'text-light-3'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'dark',
      class: {
        table: [
          'bg-dark-3/[.20]'
        ],
        thead: [
          'text-dark-3'
        ],
        tr: [
          'text-dark-3'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        table: [
          'bg-light-3/[.20]',
          'dark:bg-dark-3/[.20]'
        ],
        thead: [
          'text-black',
          'dark:text-white'
        ],
        tr: [
          'text-black',
          'dark:text-white'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
