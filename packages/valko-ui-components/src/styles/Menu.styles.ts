import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    group: [
      'vk-menu__group',
      'font-bold',
      'px-2'
    ],
    menu: [
      'w-full',
      'mb-4'
    ],
    item: [
      'w-full'
    ],
    content: [
      'vk-menu__content',
      'w-full',
      'py-2.5',
      'px-4',
      'flex',
      'text-nowrap',
      'text-left',
      'transition-color',
      'duration-200',
      'cursor-pointer',
      'hover:bg-light-200',
      'hover:dark:bg-dark-800'
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
    variant: {
      filled: {
        content: [
          'data-[active=true]:text-light-50'
        ]
      },
      outlined: {
        content: [
          'py-[calc(0.625rem_-_2px)]',
          'px-[calc(1rem_-_2px)]',
          'border-2',
          'border-transparent',
          'data-[active=true]:bg-transparent',
          'data-[active=true]:dark:-transparent'
        ]
      },
      ghost: {
        content: [
          'vk-menu__ghost'
        ]
      },
      link: {
        content: [
          'vk-menu__line'
        ]
      },
      line: {
        content: [
          'border-l-2',
          'border-transparent'
        ]
      },
      gradient: {
        content: [
          'bg-gradient-to-br',
          'data-[active=true]:text-light-50'
        ]
      }
    },
    size: {
      xs: {
        content: [
          'text-xs'
        ]
      },
      sm: {
        content: [
          'text-sm'
        ]
      },
      md: {
        content: [
          'text-base'
        ]
      },
      lg: {
        content: [
          'text-lg'
        ]
      }
    },
    shape: {
      rounded: {
        content: [
          'rounded-full'
        ]
      },
      square: {
        content: [
          'rounded-none'
        ]
      },
      soft: {
        content: [
          'rounded-lg'
        ]
      }
    },
    floating: {
      true: {
        item: [
          'px-2',
          'py-0.5'
        ],
        content: [
          'px-4',
          'py-2'
        ]
      }
    }
  },
  compoundVariants: [
    // variant=filled && colors
    {
      variant: 'filled',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:bg-primary-500',
          'data-[active=true]:dark:bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:bg-light-200',
          'data-[active=true]:text-dark-800',
          'data-[active=true]:dark:bg-dark-800',
          'data-[active=true]:dark:text-light-50'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:bg-success-500',
          'data-[active=true]:dark:bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:bg-error-500',
          'data-[active=true]:dark:bg-error-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:bg-warning-500',
          'data-[active=true]:dark:bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:bg-info-500',
          'data-[active=true]:dark:bg-info-500'
        ]
      }
    },
    // variant=outlined && colors
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:text-primary-500',
          'data-[active=true]:border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:text-dark-600',
          'data-[active=true]:border-light-300',
          'data-[active=true]:dark:text-light-200',
          'data-[active=true]:dark:border-dark-700'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:text-success-500',
          'data-[active=true]:border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:text-error-500',
          'data-[active=true]:border-error-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:text-warning-500',
          'data-[active=true]:border-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:text-info-500',
          'data-[active=true]:border-info-500'
        ]
      }
    },
    // variant=ghost && colors
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:text-primary-500',
          'data-[active=true]:bg-primary-500/[.15]',
          'data-[active=true]:dark:bg-primary-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:text-dark-600',
          'data-[active=true]:bg-light-300/[.2]',
          'data-[active=true]:dark:text-light-200',
          'data-[active=true]:dark:bg-dark-700/[.2]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:text-success-500',
          'data-[active=true]:bg-success-500/[.15]',
          'data-[active=true]:dark:bg-success-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:text-error-500',
          'data-[active=true]:bg-error-500/[.15]',
          'data-[active=true]:dark:bg-error-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:text-warning-500',
          'data-[active=true]:bg-warning-500/[.15]',
          'data-[active=true]:dark:bg-warning-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:text-info-500',
          'data-[active=true]:bg-info-500/[.15]',
          'data-[active=true]:dark:bg-info-500/[.15]'
        ]
      }
    },
    // variant=link && colors
    {
      variant: 'link',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:text-primary-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:text-dark-950',
          'data-[active=true]:dark:text-light-400'
        ]
      }
    },
    {
      variant: 'link',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:text-success-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:text-error-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:text-warning-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:text-info-500'
        ]
      }
    },
    // variant=line && colors
    {
      variant: 'line',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:border-primary-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:border-light-300',
          'data-[active=true]:dark:border-dark-700'
        ]
      }
    },
    {
      variant: 'line',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:border-success-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:border-error-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:border-warning-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:border-info-500'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:from-primary-500',
          'data-[active=true]:to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:from-light-200',
          'data-[active=true]:to-light-400',
          'data-[active=true]:text-dark-800',
          'data-[active=true]:dark:from-dark-600',
          'data-[active=true]:dark:to-dark-800',
          'data-[active=true]:dark:text-light-50'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:from-success-500',
          'data-[active=true]:to-success-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:from-info-500',
          'data-[active=true]:to-info-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:from-warning-500',
          'data-[active=true]:to-warning-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:from-error-500',
          'data-[active=true]:to-error-900'
        ]
      }
    },
    // shape=rounded && variant=line
    {
      variant: 'line',
      shape: 'rounded',
      class: {
        content: [
          'rounded-2xl'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
