import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-tag',
      'w-fit',
      'flex',
      'justify-between',
      'items-center'
    ],
    icons: [
      'mx-1'
    ],
    content: [
      'mx-1',
      'font-semibold',
      'tracking-wider'
    ],
    closable: [
      'vk-tag__closable',
      'ml-1',
      'flex',
      'items-center'
    ],
    contentContainer: [
      'w-full',
      'flex',
      'gap-1',
      'justify-center',
      'items-center'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'text-light-50'
        ]
      },
      ghost: {
        container: [
          'shadow-none'
        ]
      },
      outlined: {
        container: [
          'border-2'
        ]
      },
      gradient: {
        container: [
          'bg-gradient-to-br',
          'text-light-50'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
          'rounded-full'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      }
    },
    size: {
      xs: {
        container: [
          'text-[0.6321875rem]',
          'leading-[0.6321875rem]',
          'p-[0.180625rem]'
        ]
      },
      sm: {
        container: [
          'text-[0.74375rem]',
          'leading-[0.74375rem]',
          'p-[0.2125rem]'
        ]
      },
      md: {
        container: [
          'text-sm',
          'leading-[0.875rem]',
          'p-1'
        ]
      },
      lg: {
        container: [
          'text-[1.00625rem]',
          'leading-[1.00625rem]',
          'p-[0.2875rem]'
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
    disabled: {
      true: {}
    },
    isPressable: {
      true: {
        container: [
          'cursor-pointer'
        ]
      }
    }
  },
  compoundVariants: [
    //filled & color
    {
      variant: 'filled',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'bg-light-300',
          'text-dark-600',
          'dark:text-light-200',
          'dark:bg-dark-800'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        container: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      disabled: false,
      class: {
        container: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      disabled: false,
      class: {
        container: [
          'bg-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'text-primary-500',
          'bg-primary-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'bg-light-400/[.15]',
          'dark:bg-dark-600/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      disabled: false,
      class: {
        container: [
          'text-positive',
          'bg-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      disabled: false,
      class: {
        container: [
          'text-accent',
          'bg-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning',
          'bg-warning/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      disabled: false,
      class: {
        container: [
          'text-negative',
          'bg-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        container: [
          'text-primary-500',
          'border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        container: [
          'border-dark-800',
          'dark:border-light-300'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      disabled: false,
      class: {
        container: [
          'text-positive',
          'border-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      disabled: false,
      class: {
        container: [
          'text-accent',
          'border-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning',
          'border-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      disabled: false,
      class: {
        container: [
          'text-negative',
          'border-negative'
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
      color: 'secondary',
      class: {
        container: [
          'from-light-200',
          'to-light-400',
          'text-dark-600',
          'dark:from-dark-600',
          'dark:to-dark-800',
          'dark:text-light-200'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        container: [
          'from-positive',
          'to-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        container: [
          'from-accent',
          'to-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        container: [
          'from-warning',
          'to-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        container: [
          'from-negative',
          'to-negative'
        ]
      }
    },
    // disabled & variant
    {
      variant: 'filled',
      disabled: true,
      class: {
        container: [
          'bg-gray-600',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    },
    {
      variant: 'ghost',
      disabled: true,
      class: {
        container: [
          'text-gray-600',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'cursor-not-allowed'
        ]
      }
    },
    {
      variant: 'outlined',
      disabled: true,
      class: {
        container: [
          'text-gray-600',
          'hover:bg-transparent',
          'active:bg-transparent',
          'opacity-50',
          'border-gray-600',
          'cursor-not-allowed'
        ]
      }
    },
    // disabled & closable
    {
      disabled: true,
      class: {
        closable: [
          'cursor-not-allowed'
        ]
      }
    },
    // outlined & size
    {
      variant: 'outlined',
      size: 'xs',
      class: {
        container: [
          'p-[calc(0.180625rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'sm',
      class: {
        container: [
          'p-[calc(0.2125rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'md',
      class: {
        container: [
          'p-[calc(0.25rem_-_2px)]'
        ]
      }
    },
    {
      variant: 'outlined',
      size: 'lg',
      class: {
        container: [
          'p-[calc(0.2875rem_-_2px)]'
        ]
      }
    },
    // isPressable & filled
    {
      variant: 'filled',
      color: 'primary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-primary-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-light-400',
          'dark:focus:ring-dark-900'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-negative'
        ]
      }
    },
    // isPressable & ghost
    {
      variant: 'ghost',
      color: 'primary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-primary-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-light-400/[.30]',
          'dark:focus:ring-dark-950/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-warning/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-negative'
        ]
      }
    },
    // isPressable & outlined
    {
      variant: 'outlined',
      color: 'primary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-primary-400/20'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'dark:focus:ring-dark-900/20'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-warning/20'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-negative'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
