import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    button: [
      'vk-button__base',
      'flex',
      'items-center',
      'justify-center',
      'font-semibold',
      'tracking-wider',
      'ring-inset',
      'shadow-lg',
      'shadow-light-4',
      'transition-all',
      'ease-in-out',
      'duration-150',
      'outline-none',
      'active:shadow-none',
      'focus:ring-2',
      'focus:outline-none',
      'focus-visible:outline-none',
      'dark:shadow-dark-5'
    ],
    spinnerContainer: [
      'w-0',
      'overflow-hidden',
      'max-w-base',
      'transition-all',
      'linear',
      'duration-150'
    ]
  },
  variants: {
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
        button: [
          'px-2',
          'py-2',
          'text-xs'
        ]
      },
      sm: {
        button: [
          'px-3',
          'py-2.5',
          'text-sm'
        ]
      },
      md: {
        button: [
          'px-4',
          'py-2.5',
          'text-base'
        ]
      },
      lg: {
        button: [
          'px-5',
          'py-3',
          'text-lg'
        ]
      }
    },
    variant: {
      filled: {
        button: [
          'text-light-1'
        ]
      },
      ghost: {
        button: [
          'shadow-none'
        ]
      },
      outlined: {
        button: [
          'border-2'
        ]
      },
      link: {
        button: [
          'bg-transparent',
          'shadow-none'
        ]
      },
      gradient: {
        button: [
          'bg-gradient-to-br',
          'text-light-1'
        ]
      }
    },
    block: {
      true: {
        button: [
          'w-full'
        ]
      }
    },
    flat: {
      true: {
        button: [
          'shadow-none'
        ]
      }
    },
    disabled: {
      true: {
        button: [
          'cursor-not-allowed',
          'opacity-50',
          'focus:ring-none',
          'ring-0',
          'active:shadow-lg'
        ]
      }
    },
    condensed: {
      true: {
        button: [
          'px-0',
          'py-0'
        ]
      }
    },
    shape: {
      rounded: {
        button: [
          'rounded-full'
        ]
      },
      soft: {
        button: [
          'rounded'
        ]
      },
      square: {
        button: [
          'rounded-none'
        ]
      }
    },
    loading: {
      true: {
        spinnerContainer: [
          'mr-1'
        ],
        button: [
          'opacity-75',
          'pointer-events-none'
        ]
      }
    }
  },
  compoundVariants: [
    {
      variant: 'filled',
      color: 'primary',
      disabled: false,
      class: {
        button: [
          'bg-primary-600',
          'focus:ring-primary-700',
          'hover:bg-primary-500',
          'active:bg-primary-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          [
            'bg-light-4',
            'focus:ring-light-4',
            'hover:bg-light-3',
            'active:bg-light-3',
            'text-dark-1',
            'dark:bg-dark-2',
            'dark:focus:ring-dark-2',
            'dark:hover:bg-dark-1',
            'dark:active:bg-dark-3',
            'dark:text-light-3'
          ]
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'bg-success-600',
          'focus:ring-success-700',
          'hover:bg-success-500',
          'active:bg-success-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'bg-info-600',
          'focus:ring-info-700',
          'hover:bg-info-500',
          'active:bg-info-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'bg-warning-600',
          'focus:ring-warning-700',
          'hover:bg-warning-500',
          'active:bg-warning-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'bg-error-600',
          'focus:ring-error-700',
          'hover:bg-error-500',
          'active:bg-error-700'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        button: [
          'text-primary-600',
          'bg-primary-500/[.15]',
          'focus:ring-primary-500/[.30]',
          'hover:bg-primary-500/[.25]',
          'active:bg-primary-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'text-dark-1',
          'bg-light-5/[.15]',
          'focus:ring-light-5/[.30]',
          'hover:bg-light-5/[.25]',
          'active:bg-light-5/[.30]',
          'dark:text-light-3',
          'dark:bg-dark-4/[.15]',
          'dark:focus:ring-dark-5/[.30]',
          'dark:hover:bg-dark-3/[.25]',
          'dark:active:bg-dark-5/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-success-600',
          'bg-success-500/[.15]',
          'focus:ring-success-500/[.30]',
          'hover:bg-success-500/[.25]',
          'active:bg-success-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'text-info-600',
          'bg-info-500/[.15]',
          'focus:ring-info-500/[.30]',
          'hover:bg-info-500/[.25]',
          'active:bg-info-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'text-warning-600',
          'bg-warning-500/[.15]',
          'focus:ring-warning-500/[.30]',
          'hover:bg-warning-500/[.25]',
          'active:bg-warning-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'text-error-600',
          'bg-error-500/[.15]',
          'focus:ring-error-500/[.30]',
          'hover:bg-error-500/[.25]',
          'active:bg-error-500/[.30]'
        ]
      }
    },
    // link & color
    {
      variant: 'link',
      color: 'primary',
      disabled: false,
      class: {
        button: [
          'text-primary-600',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'active:bg-primary-400/20'
        ]
      }
    },
    {
      variant: 'link',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'text-dark-3',
          'focus:ring-light-4/40',
          'hover:bg-light-3/40',
          'active:bg-light-4/40',
          'dark:text-light-3',
          'dark:focus:ring-dark-4/40',
          'dark:hover:bg-dark-3/40',
          'dark:active:bg-dark-4/40'
        ]
      }
    },
    {
      variant: 'link',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-success-600',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'active:bg-success-400/20'
        ]
      }
    },
    {
      variant: 'link',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'text-info-600',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'active:bg-info-400/20'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'text-warning-600',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'active:bg-warning-400/20'
        ]
      }
    },
    {
      variant: 'link',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'text-error-600',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'active:bg-error-400/20'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        button: [
          'text-primary-600',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'active:bg-primary-400/20',
          'border-primary-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'text-dark-1',
          'focus:ring-light-4/20',
          'hover:bg-light-5/20',
          'active:bg-light-4/20',
          'border-light-4',
          'dark:text-light-3',
          'dark:focus:ring-dark-4/20',
          'dark:hover:bg-dark-5/20',
          'dark:active:bg-dark-4/20',
          'dark:border-dark-3'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-success-600',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'active:bg-success-400/20',
          'border-success-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'text-info-600',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'active:bg-info-400/20',
          'border-info-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'text-warning-600',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'active:bg-warning-400/20',
          'border-warning-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'text-error-600',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'active:bg-error-400/20',
          'border-error-600'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        button: [
          'from-primary-500',
          'to-primary-900',
          'focus:ring-primary-700',
          'hover:to-primary-700',
          'active:from-primary-600',
          'active:to-primary-800'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      class: {
        button: [
          'from-light-4',
          'to-light-5',
          'focus:ring-light-5',
          'hover:from-light-5',
          'active:from-light-5',
          'active:to-light-4',
          'dark:from-dark-1',
          'dark:to-dark-5',
          'dark:focus:ring-dark-3',
          'dark:hover:to-dark-3',
          'dark:active:from-dark-2',
          'dark:active:to-dark-4'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        button: [
          'from-success-500',
          'to-success-900',
          'focus:ring-success-700',
          'hover:to-success-700',
          'active:from-success-600',
          'active:to-success-800'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      class: {
        button: [
          'from-info-500',
          'to-info-900',
          'focus:ring-info-700',
          'hover:to-info-700',
          'active:from-info-600',
          'active:to-info-800'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        button: [
          'from-warning-500',
          'to-warning-900',
          'focus:ring-warning-700',
          'hover:to-warning-700',
          'active:from-warning-600',
          'active:to-warning-800'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      class: {
        button: [
          'from-error-500',
          'to-error-900',
          'focus:ring-error-700',
          'hover:to-error-700',
          'active:from-error-600',
          'active:to-error-800'
        ]
      }
    },
    // disabled & variant
    {
      variant: 'filled',
      disabled: true,
      class: {
        button: [
          'bg-gray-600'
        ]
      }
    },
    {
      variant: 'ghost',
      disabled: true,
      class: {
        button: [
          'text-gray-600',
          'hover:bg-transparent',
          'active:bg-transparent'
        ]
      }
    },
    {
      variant: 'outlined',
      disabled: true,
      class: {
        button: [
          'text-gray-600',
          'border-gray-600',
          'hover:bg-transparent',
          'active:bg-transparent'
        ]
      }
    },
    // outlined & size
    {
      size: 'xs',
      variant: 'outlined',
      condensed: false,
      class: {
        button: [
          'px-[calc(0.5rem_-_2px)]',
          'py-[calc(0.5rem_-_2px)]'
        ]
      }
    },
    {
      size: 'sm',
      variant: 'outlined',
      condensed: false,
      class: {
        button: [
          'px-[calc(0.75rem_-_2px)]',
          'py-[calc(0.625rem_-_2px)]'
        ]
      }
    },
    {
      size: 'md',
      variant: 'outlined',
      condensed: false,
      class: {
        button: [
          'px-[calc(1rem_-_2px)]',
          'py-[calc(0.625rem_-_2px)]'
        ]
      }
    },
    {
      size: 'lg',
      variant: 'outlined',
      condensed: false,
      class: {
        button: [
          'px-[calc(1.25rem_-_2px)]',
          'py-[calc(0.75rem_-_2px)]'
        ]
      }
    },
    // spinner container size
    {
      loading: true,
      size: 'xs',
      class: {
        spinnerContainer: [
          'w-3'
        ]
      }
    },
    {
      loading: true,
      size: 'sm',
      class: {
        spinnerContainer: [
          'w-3.5'
        ]
      }
    },
    {
      loading: true,
      size: 'md',
      class: {
        spinnerContainer: [
          'w-4'
        ]
      }
    },
    {
      loading: true,
      size: 'lg',
      class: {
        spinnerContainer: [
          'w-5'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
