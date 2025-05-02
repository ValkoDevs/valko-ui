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
      'overflow-hidden'
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
      filled: {},
      outlined: {},
      ghost: {
        container: [
          'shadow-none'
        ]
      },
      gradient: {
        container: [
          'bg-gradient-to-br'
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
    elevated: {
      true: {
        container: [
          'shadow-el1'
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
          'bg-primary',
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        container: [
          'bg-secondary',
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        container: [
          'bg-positive',
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        container: [
          'bg-accent',
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        container: [
          'bg-warning',
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        container: [
          'bg-negative',
          'text-on-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        container: [
          'border-primary',
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        container: [
          'border-secondary',
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      class: {
        container: [
          'border-positive',
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      class: {
        container: [
          'border-accent',
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        container: [
          'border-warning',
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      class: {
        container: [
          'border-negative',
          'text-on-negative-container'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        container: [
          'bg-primary-container',
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        container: [
          'bg-secondary-container',
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        container: [
          'bg-positive-container',
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        container: [
          'bg-accent-container',
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        container: [
          'bg-warning-container',
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        container: [
          'bg-negative-container',
          'text-on-negative-container'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        container: [
          'from-primary-gradient-start',
          'to-primary-gradient-end',
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        container: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end',
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        container: [
          'from-positive-gradient-start',
          'to-positive-gradient-end',
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        container: [
          'from-accent-gradient-start',
          'to-accent-gradient-end',
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        container: [
          'from-warning-gradient-start',
          'to-warning-gradient-end',
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        container: [
          'from-negative-gradient-start',
          'to-negative-gradient-end',
          'text-on-negative'
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
