import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    button: [
      'vk-button__base',
      'flex',
      'relative',
      'items-center',
      'justify-center',
      'tracking-wider',
      'ring-inset',
      'outline-none',
      'overflow-hidden',
      'focus:outline-none',
      'focus-visible:outline-none',
      'focus-visible:ring-2'
    ],
    spinnerContainer: [
      'w-0',
      'overflow-hidden',
      'max-w-base',
      'transition-all',
      'linear',
      'duration-150'
    ],
    stateLayer: [
      'absolute',
      'inset-0',
      'z-[1]',
      'transition-all',
      'ease-in-out',
      'duration-150',
      'hover:bg-state-hover',
      'active:bg-state-active',
      'focus:bg-state-focus'
    ],
    ripple: [
      'absolute',
      'animate-ripple',
      'rounded-full',
      'events-none',
      'bg-current/[.5]',
      'z-20'
    ]
  },
  variants: {
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {},
      surface: {}
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
          'vk-button__filled'
        ]
      },
      ghost: {
        button: [
          'vk-button__ghost'
        ]
      },
      outlined: {
        button: [
          'border-2'
        ]
      },
      link: {
        button: [
          'bg-transparent'
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
    elevated: {
      true: {
        button: [
          'shadow-el1'
        ]
      }
    },
    disabled: {
      true: {
        button: [
          'cursor-not-allowed',
          'opacity-50',
          'focus:ring-none',
          'ring-0'
        ]
      },
      false: {
        button: [
          'cursor-pointer'
        ]
      }
    },
    condensed: {
      true: {}
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
        button: [
          'gap-1',
          'opacity-75',
          'pointer-events-none'
        ]
      }
    }
  },
  compoundVariants: [
    {
      condensed: true,
      size: ['xs', 'sm', 'md', 'lg'],
      class: {
        button: [
          'py-0',
          'px-0'
        ]
      }
    },
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
      color: 'secondary',
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
      color: 'positive',
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
      color: 'accent',
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
      color: 'negative',
      disabled: false,
      class: {
        button: [
          'bg-negative',
          'text-on-negative'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'surface',
      disabled: false,
      class: {
        button: [
          'bg-surface-container-highest',
          'text-on-surface'
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
      color: 'secondary',
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
      color: 'positive',
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
      color: 'accent',
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
      color: 'negative',
      disabled: false,
      class: {
        button: [
          'bg-negative-container',
          'text-on-negative-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'surface',
      disabled: false,
      class: {
        button: [
          'bg-surface-container-highest/[.5]',
          'text-on-surface-variant'
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
      color: 'secondary',
      disabled: false,
      class: {
        button: [
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'positive',
      disabled: false,
      class: {
        button: [
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'accent',
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
      color: 'negative',
      disabled: false,
      class: {
        button: [
          'text-on-negative-container'
        ]
      }
    },
    {
      variant: 'link',
      color: 'surface',
      disabled: false,
      class: {
        button: [
          'text-on-surface'
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
      color: 'secondary',
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
      color: 'positive',
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
      color: 'accent',
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
      color: 'negative',
      disabled: false,
      class: {
        button: [
          'text-on-negative-container',
          'border-negative'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'surface',
      disabled: false,
      class: {
        button: [
          'text-on-surface-variant',
          'border-outlined'
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
          'from-primary-gradient-start',
          'to-primary-gradient-end',
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      disabled: false,
      class: {
        button: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end',
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      disabled: false,
      class: {
        button: [
          'from-positive-gradient-start',
          'to-positive-gradient-end',
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      disabled: false,
      class: {
        button: [
          'from-accent-gradient-start',
          'to-accent-gradient-end',
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
          'from-warning-gradient-start',
          'to-warning-gradient-end',
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      disabled: false,
      class: {
        button: [
          'from-negative-gradient-start',
          'to-negative-gradient-end',
          'text-on-negative'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'surface',
      disabled: false,
      class: {
        button: [
          'from-surface-container',
          'to-surface-container-highest',
          'text-on-surface'
        ]
      }
    },
    // disabled & variant
    {
      variant: 'filled',
      disabled: true,
      class: {
        button: [
          'bg-disabled',
          'text-on-disabled'
        ]
      }
    },
    {
      variant: 'gradient',
      disabled: true,
      class: {
        button: [
          'from-disabled-gradient-start',
          'to-disabled-gradient-end',
          'text-on-disabled'
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
        ]
      }
    },
    {
      disabled: true,
      class: {
        stateLayer: [
          'hover:bg-transparent',
          'active:bg-transparent',
          'focus:bg-transparent'
        ]
      }
    },
    // disabled & elevated
    {
      disabled: true,
      elevated: true,
      class: {
        button: [
          'shadow-el0'
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
