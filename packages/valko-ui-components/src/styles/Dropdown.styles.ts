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
      'data-[disabled=true]:dark:bg-dark-1'
    ],
    itemsIcon: [
      'mr-2'
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
          'hover:text-light-1'
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
          'hover:text-light-1'
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
      color: 'neutral',
      class: {
        itemsButton: [
          'hover:bg-light-4',
          'hover:text-dark-1',
          'hover:dark:bg-dark-2',
          'hover:dark:text-light-3'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        itemsButton: [
          'hover:bg-success-500',
          'hover:dark:bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        itemsButton: [
          'hover:bg-info-500',
          'hover:dark:bg-info-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:bg-warning-500',
          'hover:dark:bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        itemsButton: [
          'hover:bg-error-500',
          'hover:dark:bg-error-500'
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
      color: 'neutral',
      class: {
        itemsButton: [
          'hover:text-dark-1',
          'hover:border-light-4',
          'hover:dark:text-light-4',
          'hover:dark:border-dark-2'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        itemsButton: [
          'hover:text-success-500',
          'hover:border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        itemsButton: [
          'hover:text-info-500',
          'hover:border-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:text-warning-500',
          'hover:border-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        itemsButton: [
          'hover:text-error-500',
          'hover:border-error-500'
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
      color: 'neutral',
      class: {
        itemsButton: [
          'hover:text-dark-1',
          'hover:bg-light-5/[.15]',
          'hover:dark:text-light-4',
          'hover:dark:bg-dark-4/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        itemsButton: [
          'hover:text-success-500',
          'hover:bg-success-500/[.15]',
          'hover:dark:bg-success-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        itemsButton: [
          'hover:text-info-500',
          'hover:bg-info-500/[.15]',
          'hover:dark:bg-info-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:text-warning-500',
          'hover:bg-warning-500/[.15]',
          'hover:dark:bg-warning-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        itemsButton: [
          'hover:text-error-500',
          'hover:bg-error-500/[.15]',
          'hover:dark:bg-error-500/[.15]'
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
      color: 'neutral',
      class: {
        itemsButton: [
          'hover:text-dark-3',
          'hover:dark:text-light-5'
        ]
      }
    },
    {
      variant: 'link',
      color: 'success',
      class: {
        itemsButton: [
          'hover:text-success-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'info',
      class: {
        itemsButton: [
          'hover:text-info-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:text-warning-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'error',
      class: {
        itemsButton: [
          'hover:text-error-500'
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
      color: 'neutral',
      class: {
        itemsButton: [
          'hover:from-light-1',
          'hover:to-light-5',
          'hover:text-dark-1',
          'hover:dark:from-dark-1',
          'hover:dark:to-dark-5',
          'hover:dark:text-light-3'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'success',
      class: {
        itemsButton: [
          'hover:from-success-500',
          'hover:to-success-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'info',
      class: {
        itemsButton: [
          'hover:from-info-500',
          'hover:to-info-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        itemsButton: [
          'hover:from-warning-500',
          'hover:to-warning-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'error',
      class: {
        itemsButton: [
          'hover:from-error-500',
          'hover:to-error-900'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
