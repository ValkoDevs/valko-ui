import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-alert__container',
      'w-full',
      'p-2',
      'flex',
      'gap-2',
      'shadow-lg',
      'shadow-light-300',
      'dark:shadow-dark-950'
    ],
    mainIcon: [],
    contentContainer: [
      'flex',
      'flex-col',
      'grow'
    ],
    title: [
      'font-bold'
    ],
    p: [
      'vk-alert__p',
      'font-medium',
      'break-normal'
    ],
    closeIcon: [
      'vk-alert__close'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'text-light-50'
        ],
        closeIcon: [
          'text-light-50'
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
          'bg-gradient-to-br',
          'text-light-50'
        ],
        closeIcon: [
          'text-light-50'
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
        mainIcon: [
          'text-sm'
        ],
        p: [
          'text-xs'
        ]
      },
      sm: {
        title: [
          'text-base'
        ],
        mainIcon: [
          'text-base'
        ],
        p: [
          'text-sm'
        ]
      },
      md: {
        title: [
          'text-lg'
        ],
        mainIcon: [
          'text-lg'
        ],
        p: [
          'text-base'
        ]
      },
      lg: {
        title: [
          'text-xl'
        ],
        mainIcon: [
          'text-xl'
        ],
        p: [
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
          'rounded-3xl'
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
          'bg-light-200',
          'dark:bg-dark-800'
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
          'border-light-200',
          'dark:border-dark-800'
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
          'bg-light-200/[.4]',
          'dark:bg-dark-800/[.4]'
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
          'from-light-50',
          'to-light-400',
          'dark:from-dark-600',
          'dark:to-dark-950'
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
    // filled & gradient & neutral (title,p, icons)
    {
      variant: ['filled', 'gradient'],
      color: 'neutral',
      class: {
        container: [
          'text-dark-600',
          'dark:text-light-50'
        ],
        closeIcon: [
          'text-dark-600',
          'dark:text-light-50'
        ]
      }
    },
    // ghost & outlined & color (title, p, icons)
    {
      variant: ['ghost', 'outlined'],
      color: 'primary',
      class: {
        container: [
          'text-primary-500'
        ],
        closeIcon: [
          'text-primary-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'neutral',
      class: {
        container: [
          'text-dark-600',
          'dark:text-light-50'
        ],
        closeIcon: [
          'text-dark-600',
          'dark:text-light-50'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'success',
      class: {
        container: [
          'text-success-500'
        ],
        closeIcon: [
          'text-success-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'info',
      class: {
        container: [
          'text-info-500'
        ],
        closeIcon: [
          'text-info-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'warning',
      class: {
        container: [
          'text-warning-500'
        ],
        closeIcon: [
          'text-warning-500'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'error',
      class: {
        container: [
          'text-error-500'
        ],
        closeIcon: [
          'text-error-500'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
