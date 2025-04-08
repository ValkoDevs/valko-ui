import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    button: [
      'vk-button__base',
      'flex',
      'items-center',
      'justify-center',
      'tracking-wider',
      'ring-inset',
      'shadow-lg',
      'shadow-light-300',
      'transition-all',
      'ease-in-out',
      'duration-150',
      'outline-none',
      'active:shadow-none',
      'focus:outline-none',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'dark:shadow-dark-950/[.2]'
    ],
    spinnerContainer: [
      'w-0',
      'overflow-hidden',
      'max-w-base',
      'transition-all',
      'linear',
      'duration-150'
    ],
    loader: [
      'data-[variant=filled]:data-[color=neutral]:text-white',
      'data-[variant=gradient]:data-[color=neutral]:text-white',
      'data-[variant=ghost]:data-[color=neutral]:text-black',
      'data-[variant=outlined]:data-[color=neutral]:text-black',
      'data-[variant=link]:data-[color=neutral]:text-black',
      'dark:data-[variant=filled]:data-[color=neutral]:text-black',
      'dark:data-[variant=gradient]:data-[color=neutral]:text-black',
      'dark:data-[variant=ghost]:data-[color=neutral]:text-white',
      'dark:data-[variant=outlined]:data-[color=neutral]:text-white',
      'dark:data-[variant=link]:data-[color=neutral]:text-white'
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
          'text-light-50'
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
          'text-light-50'
        ]
      }
    },
    block: {
      true: {
        button: [
          'w-full'
        ]
      },
      false: {
        button: [
          'w-fit'
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
      },
      false: {
        button: [
          'cursor-pointer'
        ]
      }
    },
    condensed: {
      true: {
        button: [
          'px-0',
          'py-0',
          'font-normal'
        ]
      },
      false: {
        button: [
          'font-semibold'
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
          'bg-primary-500',
          'focus:ring-primary-600',
          'hover:bg-primary-500/[.8]',
          'active:bg-primary-600'
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
            'bg-light-300',
            'hover:bg-light-300/[.8]',
            'active:bg-light-400/[.5]',
            'text-dark-700',
            'dark:bg-dark-600',
            'dark:hover:bg-dark-600/[.8]',
            'dark:active:bg-dark-700',
            'dark:text-light-100'
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
          'bg-success-500',
          'focus:ring-success-600',
          'hover:bg-success-500/[.8]',
          'active:bg-success-600'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'bg-info-500',
          'focus:ring-info-600',
          'hover:bg-info-500/[.8]',
          'active:bg-info-600'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'bg-warning-500',
          'focus:ring-warning-600',
          'hover:bg-warning-500/[.8]',
          'active:bg-warning-600'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'bg-error-500',
          'focus:ring-error-600',
          'hover:bg-error-500/[.8]',
          'active:bg-error-600'
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
          'text-primary-500',
          'bg-primary-500/[.3]',
          'focus:ring-primary-500/[.30]',
          'hover:bg-primary-500/[.25]',
          'active:bg-primary-500/[.30]',
          'dark:bg-primary-500/[.15]',
          'dark:hover:bg-primary-500/[.25]',
          'dark:active:bg-primary-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'text-dark-600',
          'bg-dark-800/[.15]',
          'focus:ring-dark-800/[.30]',
          'hover:bg-dark-800/[.25]',
          'active:bg-dark-800/[.30]',
          'dark:text-light-200',
          'dark:bg-light-300/[.15]',
          'dark:focus:ring-light-400/[.30]',
          'dark:hover:bg-light-200/[.25]',
          'dark:active:bg-light-400/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-success-500',
          'bg-success-500/[.3]',
          'focus:ring-success-500/[.30]',
          'hover:bg-success-500/[.25]',
          'active:bg-success-500/[.30]',
          'dark:bg-success-500/[.15]',
          'dark:hover:bg-success-500/[.25]',
          'dark:active:bg-success-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'text-info-500',
          'bg-info-500/[.3]',
          'focus:ring-info-500/[.30]',
          'hover:bg-info-500/[.25]',
          'active:bg-info-500/[.30]',
          'dark:bg-info-500/[.15]',
          'dark:hover:bg-info-500/[.25]',
          'dark:active:bg-info-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'text-warning-500',
          'bg-warning-500/[.3]',
          'focus:ring-warning-500/[.30]',
          'hover:bg-warning-500/[.25]',
          'active:bg-warning-500/[.30]',
          'dark:bg-warning-500/[.15]',
          'dark:hover:bg-warning-500/[.25]',
          'dark:active:bg-warning-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'text-error-500',
          'bg-error-500/[.3]',
          'focus:ring-error-500/[.30]',
          'hover:bg-error-500/[.25]',
          'active:bg-error-500/[.30]',
          'dark:bg-error-500/[.15]',
          'dark:hover:bg-error-500/[.25]',
          'dark:active:bg-error-500/[.30]'
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
          'text-primary-500',
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
          'text-dark-800',
          'focus:ring-light-300/40',
          'hover:bg-light-200/40',
          'active:bg-light-300/40',
          'dark:text-light-200',
          'dark:focus:ring-dark-900/40',
          'dark:hover:bg-dark-800/40',
          'dark:active:bg-dark-900/40'
        ]
      }
    },
    {
      variant: 'link',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-success-500',
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
          'text-info-500',
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
          'text-warning-500',
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
          'text-error-500',
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
          'text-primary-500',
          'focus:ring-primary-400/20',
          'hover:bg-primary-300/20',
          'active:bg-primary-400/20',
          'border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'text-dark-800',
          'focus:ring-dark-900/20',
          'hover:bg-dark-950/20',
          'active:bg-dark-900/20',
          'border-dark-900',
          'dark:text-light-200',
          'dark:focus:ring-light-300/20',
          'dark:hover:bg-light-400/20',
          'dark:active:bg-light-300/20',
          'dark:border-light-200'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-success-500',
          'focus:ring-success-400/20',
          'hover:bg-success-300/20',
          'active:bg-success-400/20',
          'border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'text-info-500',
          'focus:ring-info-400/20',
          'hover:bg-info-300/20',
          'active:bg-info-400/20',
          'border-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'text-warning-500',
          'focus:ring-warning-400/20',
          'hover:bg-warning-300/20',
          'active:bg-warning-400/20',
          'border-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'text-error-500',
          'focus:ring-error-400/20',
          'hover:bg-error-300/20',
          'active:bg-error-400/20',
          'border-error-500'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      disabled: false,
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
      disabled: false,
      class: {
        button: [
          'from-dark-600',
          'to-dark-950',
          'focus:ring-dark-950',
          'hover:to-dark-800',
          'active:from-dark-950',
          'active:to-dark-600',
          'text-light-200',
          'dark:text-dark-950',
          'dark:from-light-200',
          'dark:to-light-400',
          'dark:focus:ring-light-400',
          'dark:hover:to-light-400',
          'dark:active:from-light-400',
          'dark:active:to-light-200'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      disabled: false,
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
      variant: 'gradient',
      disabled: true,
      class: {
        button: [
          'from-gray-600',
          'to-gray-900'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
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
    // disabled & flat
    {
      disabled: true,
      flat: true,
      class: {
        button: [
          'active:shadow-none'
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
