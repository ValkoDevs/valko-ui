import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    button: [
      'vk-button__base',
      'flex',
      'ring-inset',
      'shadow-lg',
      'shadow-light-300',
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
    ],
    stateLayer: [
      'w-full',
      'h-full',
      'flex',
      'items-center',
      'justify-center',
      'tracking-wider',
      'transition-all',
      'ease-in-out',
      'duration-150',
      'hover:bg-state-hover',
      'active:bg-state-active',
      'focus:bg-state-focus'
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
        stateLayer: [
          'px-2',
          'py-2',
          'text-xs'
        ]
      },
      sm: {
        stateLayer: [
          'px-3',
          'py-2.5',
          'text-sm'
        ]
      },
      md: {
        stateLayer: [
          'px-4',
          'py-2.5',
          'text-base'
        ]
      },
      lg: {
        stateLayer: [
          'px-5',
          'py-3',
          'text-lg'
        ]
      }
    },
    variant: {
      filled: {},
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
          'bg-gradient-to-br'
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
        stateLayer: [
          'px-0',
          'py-0',
          'font-normal'
        ]
      },
      false: {
        stateLayer: [
          'font-semibold'
        ]
      }
    },
    shape: {
      rounded: {
        button: [
          'rounded-full'
        ],
        stateLayer: [
          'rounded-full'
        ]
      },
      soft: {
        button: [
          'rounded-sm'
        ],
        stateLayer: [
          'rounded-sm'
        ]
      },
      square: {
        button: [
          'rounded-none'
        ],
        stateLayer: [
          'rounded-none'
        ]
      }
    },
    loading: {
      true: {
        stateLayer: [
          'gap-1'
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
          'bg-primary',
          'text-on-primary'
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
            'bg-secondary',
            'text-on-secondary'
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
          'bg-positive',
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'bg-accent',
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'bg-warning',
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'bg-negative',
          'text-on-negative'
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
          'bg-primary-container',
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'bg-secondary-container',
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'bg-positive-container',
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'bg-accent-container',
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'bg-warning-container',
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'bg-negative-container',
          'text-on-negative-container'
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
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'text-on-negative-container'
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
          'text-on-primary-container',
          'border-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'text-on-secondary-container',
          'border-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'text-on-positive-container',
          'border-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'text-on-accent-container',
          'border-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'text-on-warning-container',
          'border-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'text-on-negative-container',
          'border-negative'
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
          'from-primary',
          'to-primary-container',
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      disabled: false,
      class: {
        button: [
          'from-secondary',
          'to-secondary-container',
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      disabled: false,
      class: {
        button: [
          'from-positive',
          'to-positive-container',
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      disabled: false,
      class: {
        button: [
          'from-accent',
          'to-accent-container',
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      disabled: false,
      class: {
        button: [
          'from-warning',
          'to-warning-container',
          'text-on-waring'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      disabled: false,
      class: {
        button: [
          'from-negative',
          'to-negative-container',
          'text-on-negative'
        ]
      }
    },
    // disabled & variant
    {
      variant: 'filled',
      disabled: true,
      class: {
        button: [
          'bg-disabled'
        ]
      }
    },
    {
      variant: 'gradient',
      disabled: true,
      class: {
        button: [
          'from-disabled',
          'to-disabled-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      disabled: true,
      class: {
        button: [
          'border-disabled',
          'text-on-disabled-container'
        ],
        stateLayer: [
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
        stateLayer: [
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
        stateLayer: [
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
        stateLayer: [
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
        stateLayer: [
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
