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
          'text-light-1'
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
          'text-light-1'
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
      neutral: {},
      success: {},
      info: {},
      warning: {},
      error: {}
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
      color: 'neutral',
      disabled: false,
      class: {
        container: [
          'bg-light-4',
          'text-dark-1',
          'dark:text-light-3',
          'dark:bg-dark-3'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      disabled: false,
      class: {
        container: [
          'bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'bg-info-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'bg-error-500'
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
      color: 'neutral',
      disabled: false,
      class: {
        container: [
          'bg-light-5/[.15]',
          'dark:bg-dark-1/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      disabled: false,
      class: {
        container: [
          'text-success-500',
          'bg-success-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'text-info-500',
          'bg-info-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning-500',
          'bg-warning-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'text-error-500',
          'bg-error-500/[.15]'
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
      color: 'neutral',
      disabled: false,
      class: {
        container: [
          'border-dark-3',
          'dark:border-light-4'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        container: [
          'text-success-500',
          'border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'text-info-500',
          'border-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning-500',
          'border-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'text-error-500',
          'border-error-500'
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
          'text-dark-1',
          'dark:from-dark-1',
          'dark:to-dark-3',
          'dark:text-light-3'
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
      color: 'neutral',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-light-5',
          'dark:focus:ring-dark-4'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-success-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-info-700'
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
          'focus:ring-warning-700'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-error-700'
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
      color: 'neutral',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-light-5/[.30]',
          'dark:focus:ring-dark-5/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-success-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-info-500/[.30]'
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
          'focus:ring-warning-500/[.30]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-error-500/[.30]'
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
      color: 'neutral',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'dark:focus:ring-dark-4/20'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-success-400/20'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-info-400/20'
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
          'focus:ring-warning-400/20'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      isPressable: true,
      disabled: false,
      class: {
        container: [
          'focus:ring-error-400/20'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
