import { tv } from 'tailwind-variants'

const menu = tv({
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
      'hover:bg-surface-container-highest'
    ]
  },
  variants: {
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {}
    },
    variant: {
      filled: {},
      outlined: {
        content: [
          'py-[calc(0.625rem_-_2px)]',
          'px-[calc(1rem_-_2px)]',
          'border-2',
          'border-transparent',
          'data-[active]:bg-transparent'
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
          'bg-gradient-to-br'
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
          'data-[active]:bg-primary',
          'data-[active]:text-on-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        content: [
          'data-[active]:bg-secondary',
          'data-[active]:text-on-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        content: [
          'data-[active]:bg-positive',
          'data-[active]:text-on-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        content: [
          'data-[active]:bg-negative',
          'data-[active]:text-on-negative'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        content: [
          'data-[active]:bg-warning',
          'data-[active]:text-on-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        content: [
          'data-[active]:bg-accent',
          'data-[active]:text-on-accent'
        ]
      }
    },
    // variant=outlined && colors
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        content: [
          'data-[active]:text-primary',
          'data-[active]:border-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        content: [
          'data-[active]:text-secondary',
          'data-[active]:border-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      class: {
        content: [
          'data-[active]:text-positive',
          'data-[active]:border-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      class: {
        content: [
          'data-[active]:text-negative',
          'data-[active]:border-negative'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        content: [
          'data-[active]:text-warning',
          'data-[active]:border-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      class: {
        content: [
          'data-[active]:text-accent',
          'data-[active]:border-accent'
        ]
      }
    },
    // variant=ghost && colors
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        content: [
          'data-[active]:text-on-primary-container',
          'data-[active]:bg-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        content: [
          'data-[active]:text-on-secondary-container',
          'data-[active]:bg-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        content: [
          'data-[active]:text-on-positive-container',
          'data-[active]:bg-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        content: [
          'data-[active]:text-on-negative-container',
          'data-[active]:bg-negative-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        content: [
          'data-[active]:text-on-warning-container',
          'data-[active]:bg-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        content: [
          'data-[active]:text-on-accent-container',
          'data-[active]:bg-accent-container'
        ]
      }
    },
    // variant=link && colors
    {
      variant: 'link',
      color: 'primary',
      class: {
        content: [
          'data-[active]:text-primary'
        ]
      }
    },
    {
      variant: 'link',
      color: 'secondary',
      class: {
        content: [
          'data-[active]:text-secondary'
        ]
      }
    },
    {
      variant: 'link',
      color: 'positive',
      class: {
        content: [
          'data-[active]:text-positive'
        ]
      }
    },
    {
      variant: 'link',
      color: 'negative',
      class: {
        content: [
          'data-[active]:text-negative'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        content: [
          'data-[active]:text-warning'
        ]
      }
    },
    {
      variant: 'link',
      color: 'accent',
      class: {
        content: [
          'data-[active]:text-accent'
        ]
      }
    },
    // variant=line && colors
    {
      variant: 'line',
      color: 'primary',
      class: {
        content: [
          'data-[active]:border-primary'
        ]
      }
    },
    {
      variant: 'line',
      color: 'secondary',
      class: {
        content: [
          'data-[active]:border-secondary'
        ]
      }
    },
    {
      variant: 'line',
      color: 'positive',
      class: {
        content: [
          'data-[active]:border-positive'
        ]
      }
    },
    {
      variant: 'line',
      color: 'negative',
      class: {
        content: [
          'data-[active]:border-negative'
        ]
      }
    },
    {
      variant: 'line',
      color: 'warning',
      class: {
        content: [
          'data-[active]:border-warning'
        ]
      }
    },
    {
      variant: 'line',
      color: 'accent',
      class: {
        content: [
          'data-[active]:border-accent'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        content: [
          'data-[active]:from-primary-gradient-start',
          'data-[active]:to-primary-gradient-end',
          'data-[active]:text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        content: [
          'data-[active]:from-secondary-gradient-start',
          'data-[active]:to-secondary-gradient-end',
          'data-[active]:text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        content: [
          'data-[active]:from-positive-gradient-start',
          'data-[active]:to-positive-gradient-end',
          'data-[active]:text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        content: [
          'data-[active]:from-accent-gradient-start',
          'data-[active]:to-accent-gradient-end',
          'data-[active]:text-on-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        content: [
          'data-[active]:from-warning-gradient-start',
          'data-[active]:to-warning-gradient-end',
          'data-[active]:text-on-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        content: [
          'data-[active]:from-negative-gradient-start',
          'data-[active]:to-negative-gradient-end',
          'data-[active]:text-on-negative'
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
})

export default menu
export type MenuSlots = typeof menu.slots
