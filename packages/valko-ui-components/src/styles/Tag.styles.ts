import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-tag',
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
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'text-white'
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
          'bg-primary-600'
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
          'text-black',
          'dark:text-white',
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
          'bg-success-600'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'bg-info-600'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'bg-warning-600'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'bg-error-600'
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
          'text-primary-600',
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
          'text-success-600',
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
          'text-info-600',
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
          'text-warning-600',
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
          'text-error-600',
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
          'text-primary-600',
          'border-primary-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      disabled: false,
      class: {
        container: [
          'border-light-4',
          'dark:border-dark-3'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      disabled: false,
      class: {
        container: [
          'text-success-600',
          'border-success-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      disabled: false,
      class: {
        container: [
          'text-info-600',
          'border-info-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        container: [
          'text-warning-600',
          'border-warning-600'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      disabled: false,
      class: {
        container: [
          'text-error-600',
          'border-error-600'
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
    // pressable styles filled
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
    // pressable styles ghost
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
    // pressable styles outlined
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
