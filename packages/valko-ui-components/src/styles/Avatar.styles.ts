import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-avatar',
      'inline-flex',
      'justify-center',
      'items-center',
      'font-bold',
      'select-none',
      'shadow-lg',
      'shadow-light-4',
      'overflow-hidden',
      'dark:shadow-dark-5'
    ],
    img: [
      'w-full',
      'h-full',
      'object-cover'
    ],
    span: [
      'w-full',
      'h-full',
      'shrink-0'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'text-light-1'
        ]
      },
      outlined: {},
      ghost: {
        container: [
          'shadow-none'
        ]
      },
      gradient: {
        container: [
          'bg-gradient-to-br',
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
        container: [
          'text-xl',
          'h-10',
          'w-10'
        ]
      },
      sm: {
        container: [
          'text-3xl',
          'h-14',
          'w-14'
        ]
      },
      md: {
        container: [
          'text-5xl',
          'h-20',
          'w-20'
        ]
      },
      lg: {
        container: [
          'text-6xl',
          'h-24',
          'w-24'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
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
    },
    flat: {
      true: {
        container: [
          'shadow-none'
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
          'bg-light-4',
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
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        container: [
          'border-primary-500',
          'text-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      class: {
        container: [
          'border-light-4',
          'text-light-4',
          'dark:border-dark-3',
          'dark:text-dark-1'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        container: [
          'border-success-500',
          'text-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        container: [
          'border-info-500',
          'text-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        container: [
          'border-warning-500',
          'text-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        container: [
          'border-error-500',
          'text-error-500'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        container: [
          'bg-primary-500/[.20]',
          'text-primary-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        container: [
          'bg-light-4/[.20]',
          'text-light-4',
          'dark:bg-dark-3/[.20]',
          'dark:text-dark-1'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        container: [
          'bg-success-500/[.20]',
          'text-success-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        container: [
          'bg-info-500/[.20]',
          'text-info-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        container: [
          'bg-warning-500/[.20]',
          'text-warning-500'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        container: [
          'bg-error-500/[.20]',
          'text-error-500'
        ]
      }
    },
    // gradient & color
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
          'from-light-3',
          'to-light-5',
          'dark:from-dark-1',
          'dark:to-dark-3'
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
    // outlined & size
    {
      variant: 'outlined',
      size: ['xs', 'sm'],
      class: {
        container: [
          'border-2'
        ]
      }
    },
    {
      variant: 'outlined',
      size: ['md', 'lg'],
      class: {
        container: [
          'border-[3px]'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
