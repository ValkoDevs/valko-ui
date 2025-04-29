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
          'hover:text-white'
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
          'hover:text-white'
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
          'hover:bg-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:bg-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:bg-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:bg-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        itemsButton: [
          'hover:text-primary',
          'hover:border-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:text-secondary',
          'hover:border-secondary'
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
          'hover:text-primary',
          'hover:bg-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:text-secondary',
          'hover:bg-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:text-positive',
          'hover:bg-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:text-accent',
          'hover:bg-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:text-warning',
          'hover:bg-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:text-negative',
          'hover:bg-negative-container'
        ]
      }
    },
    // link & color
    {
      variant: 'link',
      color: 'primary',
      class: {
        itemsButton: [
          'hover:text-primary'
        ]
      }
    },
    {
      variant: 'link',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:text-secondary'
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
          'hover:from-primary-gradient-start',
          'hover:to-primary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        itemsButton: [
          'hover:from-secondary-gradient-start',
          'hover:to-secondary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        itemsButton: [
          'hover:from-positive-gradient-start',
          'hover:to-positive-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        itemsButton: [
          'hover:from-accent-gradient-start',
          'hover:to-accent-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:from-warning-gradient-start',
          'hover:to-warning-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        itemsButton: [
          'hover:from-negative-gradient-start',
          'hover:to-negative-gradient-end'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
