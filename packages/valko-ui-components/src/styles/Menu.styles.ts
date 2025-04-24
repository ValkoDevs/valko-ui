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
          'data-[active=true]:bg-primary',
          'data-[active=true]:dark:bg-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:bg-secondary-container',
          'data-[active=true]:text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:bg-positive',
          'data-[active=true]:dark:bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:bg-negative',
          'data-[active=true]:dark:bg-negative'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:bg-warning',
          'data-[active=true]:dark:bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:bg-accent',
          'data-[active=true]:dark:bg-accent'
        ]
      }
    },
    // variant=outlined && colors
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:text-primary',
          'data-[active=true]:border-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:text-on-secondary-container',
          'data-[active=true]:border-secondary-container'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:text-positive',
          'data-[active=true]:border-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:text-negative',
          'data-[active=true]:border-negative'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:text-warning',
          'data-[active=true]:border-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:text-accent',
          'data-[active=true]:border-accent'
        ]
      }
    },
    // variant=ghost && colors
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:text-on-primary-container',
          'data-[active=true]:bg-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:text-on-secondary-container',
          'data-[active=true]:bg-secondary-container/[.2]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:text-on-positive-container',
          'data-[active=true]:bg-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:text-on-negative-container',
          'data-[active=true]:bg-negative-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:text-on-warning-container',
          'data-[active=true]:bg-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:text-on-accent-container',
          'data-[active=true]:bg-accent-container'
        ]
      }
    },
    // variant=link && colors
    {
      variant: 'link',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:text-primary'
        ]
      }
    },
    {
      variant: 'link',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:text-on-secondary'
        ]
      }
    },
    {
      variant: 'link',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:text-positive'
        ]
      }
    },
    {
      variant: 'link',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:text-negative'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:text-warning'
        ]
      }
    },
    {
      variant: 'link',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:text-accent'
        ]
      }
    },
    // variant=line && colors
    {
      variant: 'line',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:border-primary'
        ]
      }
    },
    {
      variant: 'line',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:border-secondary'
        ]
      }
    },
    {
      variant: 'line',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:border-positive'
        ]
      }
    },
    {
      variant: 'line',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:border-negative'
        ]
      }
    },
    {
      variant: 'line',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:border-warning'
        ]
      }
    },
    {
      variant: 'line',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:border-accent'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        content: [
          'data-[active=true]:from-primary-gradient-start',
          'data-[active=true]:to-primary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'neutral',
      class: {
        content: [
          'data-[active=true]:from-secondary-gradient-start',
          'data-[active=true]:to-secondary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        content: [
          'data-[active=true]:from-positive-gradient-start',
          'data-[active=true]:to-positive-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      class: {
        content: [
          'data-[active=true]:from-accent-gradient-start',
          'data-[active=true]:to-accent-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        content: [
          'data-[active=true]:from-warning-gradient-start',
          'data-[active=true]:to-warning-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      class: {
        content: [
          'data-[active=true]:from-negative-gradient-start',
          'data-[active=true]:to-negative-gradient-end'
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
