import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-alert__container',
      'w-full',
      'p-4',
      'gap-4',
      'shadow-lg',
      'shadow-light-4',
      'flex',
      'justify-between',
      'items-stretch',
      'dark:shadow-dark-5'
    ],
    content: [
      'grow'
    ],
    title: [
      'font-bold'
    ],
    button: [
      'flex',
      'flex-col',
      'justify-start'
    ],
    span: [
      'font-medium',
      'break-all',
      'text-justify'
    ],
    rightIcon: [
      'vk-alert__close'
    ],
    leftIcon: []
  },
  variants: {
    variant: {
      filled: {
        title: [
          'text-light-1'
        ],
        leftIcon: [
          'text-light-1'
        ],
        rightIcon: [
          'text-light-1'
        ],
        span: [
          'text-light-1'
        ]
      },
      ghost: {
        container: [
          'bg-transparent',
          'shadow-none'
        ]
      },
      outlined: {
        container: [
          'p-[calc(1rem_-_2px)]',
          'border-2'
        ]
      },
      gradient: {
        container: [
          'bg-gradient-to-br'
        ],
        title: [
          'text-light-1'
        ],
        leftIcon: [
          'text-light-1'
        ],
        rightIcon: [
          'text-light-1'
        ],
        span: [
          'text-light-1'
        ]
      }
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
        title: [
          'text-sm'
        ],
        leftIcon: [
          'text-lg'
        ],
        span: [
          'text-xs'
        ]
      },
      sm: {
        title: [
          'text-base'
        ],
        leftIcon: [
          'text-xl'
        ],
        span: [
          'text-sm'
        ]
      },
      md: {
        title: [
          'text-lg'
        ],
        leftIcon: [
          'text-2xl'
        ],
        span: [
          'text-base'
        ]
      },
      lg: {
        title: [
          'text-xl'
        ],
        leftIcon: [
          'text-3xl'
        ],
        span: [
          'text-lg'
        ]
      }
    },
    flat: {
      true: {
        container: [
          'shadow-none'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
          'py-4',
          'px-12',
          'rounded-full'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      }
    }
  },
  compoundVariants: [
    // filled & color (container)
    {
      variant: 'filled',
      color: 'primary',
      class: {
        container: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'neutral',
      class: {
        container: [
          'bg-light-3',
          'dark:bg-dark-3'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        container: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        container: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        container: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        container: [
          'bg-error-500'
        ]
      }
    },
    // outlined & color (container)
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        container: [
          'border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      class: {
        container: [
          'border-light-3',
          'dark:border-dark-3'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        container: [
          'border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        container: [
          'border-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        container: [
          'border-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        container: [
          'border-error-500'
        ]
      }
    },
    // ghost & color (container)
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        container: [
          'bg-primary-500/[.20]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        container: [
          'bg-light-3/[.4]',
          'dark:bg-dark-3/[.4]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        container: [
          'bg-success-500/[.20]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        container: [
          'bg-info-500/[.20]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        container: [
          'bg-warning-500/[.20]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        container: [
          'bg-error-500/[.20]'
        ]
      }
    },
    // gradient & color (container)
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        container: [
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      class: {
        container: [
          'from-light-1',
          'to-light-5',
          'dark:from-dark-1',
          'dark:to-dark-5'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        container: [
          'from-success-500',
          'to-success-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      class: {
        container: [
          'from-info-500',
          'to-info-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        container: [
          'from-warning-500',
          'to-warning-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      class: {
        container: [
          'from-error-500',
          'to-error-900'
        ]
      }
    },
    // filled & gradient & neutral (title,span, icons)
    {
      variant: ['filled', 'gradient'],
      color: 'neutral',
      class: {
        title: [
          'text-dark-1',
          'dark:text-light-1'
        ],
        span: [
          'text-dark-1',
          'dark:text-light-1'
        ],
        leftIcon: [
          'text-dark-1',
          'dark:text-light-1'
        ],
        rightIcon: [
          'text-dark-1',
          'dark:text-light-1'
        ]
      }
    },
    // ghost & outlined & color (title, span, icons)
    {
      variant: ['ghost', 'outlined'],
      color: 'primary',
      class: {
        title: [
          'text-primary-500'
        ],
        span: [
          'text-primary-500'
        ],
        leftIcon: [
          'text-primary-500'
        ],
        rightIcon: [
          'text-primary-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'neutral',
      class: {
        title: [
          'text-dark-1',
          'dark:text-light-1'
        ],
        span: [
          'text-dark-1',
          'dark:text-light-1'
        ],
        leftIcon: [
          'text-dark-1',
          'dark:text-light-1'
        ],
        rightIcon: [
          'text-dark-1',
          'dark:text-light-1'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'success',
      class: {
        title: [
          'text-success-500'
        ],
        span: [
          'text-success-500'
        ],
        leftIcon: [
          'text-success-500'
        ],
        rightIcon: [
          'text-success-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'info',
      class: {
        title: [
          'text-info-500'
        ],
        span: [
          'text-info-500'
        ],
        leftIcon: [
          'text-info-500'
        ],
        rightIcon: [
          'text-info-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'warning',
      class: {
        title: [
          'text-warning-500'
        ],
        span: [
          'text-warning-500'
        ],
        leftIcon: [
          'text-warning-500'
        ],
        rightIcon: [
          'text-warning-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'error',
      class: {
        title: [
          'text-error-500'
        ],
        span: [
          'text-error-500'
        ],
        leftIcon: [
          'text-error-500'
        ],
        rightIcon: [
          'text-error-500'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
