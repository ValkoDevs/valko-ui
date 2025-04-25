import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-dropdown__container',
      'w-fit',
      'h-fit'
    ],
    icon: [
      'vk-dropdown__trigger-icon',
      'ml-2',
      'block',
      'transition-transform',
      'duration-200',
      'ease-out',
      'data-[open=true]:rotate-180'
    ],
    itemsMenu: [
      'p-2'
    ],
    triggerButton: [
      'vk-dropdown__trigger-button'
    ],
    itemsButton: [
      'vk-dropdown__item-button',
      'w-full',
      'p-2',
      'mb-1',
      'flex',
      'items-center',
      'data-[shape=rounded]:rounded-full',
      'data-[shape=soft]:rounded-lg',
      'data-[shape=square]:rounded-none',
      'data-[disabled=true]:cursor-not-allowed',
      'data-[disabled=true]:text-gray-400',
      'data-[disabled=true]:bg-gray-200',
      'data-[disabled=true]:border-transparent',
      'data-[disabled=true]:dark:bg-dark-600'
    ],
    itemsIcon: [
      'mr-2'
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
    size: {
      xs: {
        itemsButton: [
          'text-xs'
        ],
        itemsMenu: [
          'w-44'
        ]
      },
      sm: {
        itemsButton: [
          'text-sm'
        ],
        itemsMenu: [
          'w-52'
        ]
      },
      md: {
        itemsButton: [
          'text-base'
        ],
        itemsMenu: [
          'w-56'
        ]
      },
      lg: {
        itemsButton: [
          'text-lg'
        ],
        itemsMenu: [
          'w-60'
        ]
      }
    },
    variant: {
      filled: {
        itemsButton: [
          'hover:text-light-50'
        ]
      },
      outlined: {
        itemsButton: [
          'border-2',
          'border-transparent'
        ]
      },
      ghost: {},
      link: {},
      gradient: {
        itemsButton: [
          'bg-gradient-to-br',
          'hover:text-light-50'
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
        itemsButton: [
          'hover:bg-primary-500',
          'hover:dark:bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:bg-light-300',
          'hover:text-dark-600',
          'hover:dark:bg-dark-700',
          'hover:dark:text-light-200'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:bg-positive',
          'hover:dark:bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:bg-accent',
          'hover:dark:bg-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:bg-warning',
          'hover:dark:bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:bg-negative',
          'hover:dark:bg-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        itemsButton: [
          'hover:text-primary-500',
          'hover:border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:text-dark-600',
          'hover:border-light-300',
          'hover:dark:text-light-300',
          'hover:dark:border-dark-700'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:text-positive',
          'hover:border-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:text-accent',
          'hover:border-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:text-warning',
          'hover:border-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:text-negative',
          'hover:border-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        itemsButton: [
          'hover:text-primary-500',
          'hover:bg-primary-500/[.15]',
          'hover:dark:bg-primary-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:text-dark-600',
          'hover:bg-light-400/[.15]',
          'hover:dark:text-light-300',
          'hover:dark:bg-dark-900/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:text-positive',
          'hover:bg-positive',
          'hover:dark:bg-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:text-accent',
          'hover:bg-accent',
          'hover:dark:bg-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:text-warning',
          'hover:bg-warning/[.15]',
          'hover:dark:bg-warning/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:text-negative',
          'hover:bg-negative',
          'hover:dark:bg-negative'
        ]
      }
    },
    // link & color
    {
      variant: 'link',
      color: 'primary',
      class: {
        itemsButton: [
          'hover:text-primary-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:text-dark-800',
          'hover:dark:text-light-400'
        ]
      }
    },
    {
      variant: 'link',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:text-positive'
        ]
      }
    },
    {
      variant: 'link',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:text-accent'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:text-warning'
        ]
      }
    },
    {
      variant: 'link',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:text-negative'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        itemsButton: [
          'hover:from-primary-500',
          'hover:to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:from-light-50',
          'hover:to-light-400',
          'hover:text-dark-600',
          'hover:dark:from-dark-600',
          'hover:dark:to-dark-950',
          'hover:dark:text-light-200'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:from-positive',
          'hover:to-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:from-accent',
          'hover:to-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:from-warning',
          'hover:to-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:from-negative',
          'hover:to-negative'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
