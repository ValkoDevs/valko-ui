import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-dropdown__container'
    ],
    dropdown: [
      'w-full',
      'relative'
    ],
    button: [
      'vk-dropdown__button',
      'w-full',
      'flex',
      'items-center'
    ],
    icon: [
      'ml-2',
      'block',
      'transition-transform',
      'duration-200',
      'ease-out',
      'data-[open=true]:rotate-180'
    ],
    itemsMenu: [
      'p-2',
      'mt-2',
      'bg-white',
      'shadow-lg',
      'shadow-light-4',
      'z-10',
      'absolute',
      'right-0',
      'origin-top-right',
      'dark:bg-dark-3',
      'dark:shadow-dark-5'
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
      secondary: {},
      success: {},
      info: {},
      warning: {},
      error: {},
      light: {},
      dark: {}
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
        button: [
          'text-white'
        ],
        itemsButton: [
          'data-[active=true]:text-white'
        ]
      },
      outlined: {
        itemsButton: [
          'border-2',
          'border-transparent'
        ]
      },
      ghost: {
        itemsMenu: [
          'shadow-none'
        ]
      },
      link: {
        itemsMenu: [
          'bg-transparent',
          'shadow-none'
        ]
      }
    },
    shape: {
      rounded: {
        itemsMenu: [
          'rounded-2xl'
        ]
      },
      soft: {
        itemsMenu: [
          'rounded-lg'
        ]
      },
      square: {
        itemsMenu: [
          'rounded-none'
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
          'data-[active=true]:bg-primary-500',
          'data-[active=true]:dark:bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        itemsButton: [
          'data-[active=true]:bg-secondary-500',
          'data-[active=true]:dark:bg-secondary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'success',
      class: {
        itemsButton: [
          'data-[active=true]:bg-success-500',
          'data-[active=true]:dark:bg-success-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'info',
      class: {
        itemsButton: [
          'data-[active=true]:bg-info-500',
          'data-[active=true]:dark:bg-info-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        itemsButton: [
          'data-[active=true]:bg-warning-500',
          'data-[active=true]:dark:bg-warning-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'error',
      class: {
        itemsButton: [
          'data-[active=true]:bg-error-500',
          'data-[active=true]:dark:bg-error-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'light',
      class: {
        itemsButton: [
          'data-[active=true]:text-black',
          'data-[active=true]:bg-light-3',
          'data-[active=true]:dark:bg-light-1'
        ],
        button: [
          'text-black'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'dark',
      class: {
        itemsButton: [
          'data-[active=true]:bg-dark-5',
          'data-[active=true]:dark:bg-dark-5'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        itemsButton: [
          'data-[active=true]:text-primary-500',
          'data-[active=true]:border-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        itemsButton: [
          'data-[active=true]:text-secondary-500',
          'data-[active=true]:border-secondary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'success',
      class: {
        itemsButton: [
          'data-[active=true]:text-success-500',
          'data-[active=true]:border-success-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'info',
      class: {
        itemsButton: [
          'data-[active=true]:text-info-500',
          'data-[active=true]:border-info-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        itemsButton: [
          'data-[active=true]:text-warning-500',
          'data-[active=true]:border-warning-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'error',
      class: {
        itemsButton: [
          'data-[active=true]:text-error-500',
          'data-[active=true]:border-error-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'light',
      class: {
        itemsButton: [
          'data-[active=true]:text-black',
          'data-[active=true]:border-light-5',
          'data-[active=true]:dark:text-light-1',
          'data-[active=true]:dark:border-light-1'
        ],
        button: [
          'text-black',
          'dark:text-white'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'dark',
      class: {
        itemsButton: [
          'data-[active=true]:text-dark-5',
          'data-[active=true]:border-dark-5'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        itemsButton: [
          'data-[active=true]:text-primary-500',
          'data-[active=true]:bg-primary-500/[.15]',
          'data-[active=true]:dark:bg-primary-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        itemsButton: [
          'data-[active=true]:text-secondary-500',
          'data-[active=true]:bg-secondary-500/[.15]',
          'data-[active=true]:dark:bg-secondary-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'success',
      class: {
        itemsButton: [
          'data-[active=true]:text-success-500',
          'data-[active=true]:bg-success-500/[.15]',
          'data-[active=true]:dark:bg-success-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'info',
      class: {
        itemsButton: [
          'data-[active=true]:text-info-500',
          'data-[active=true]:bg-info-500/[.15]',
          'data-[active=true]:dark:bg-info-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        itemsButton: [
          'data-[active=true]:text-warning-500',
          'data-[active=true]:bg-warning-500/[.15]',
          'data-[active=true]:dark:bg-warning-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'error',
      class: {
        itemsButton: [
          'data-[active=true]:text-error-500',
          'data-[active=true]:bg-error-500/[.15]',
          'data-[active=true]:dark:bg-error-500/[.15]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'light',
      class: {
        itemsButton: [
          'data-[active=true]:text-dark-1',
          'data-[active=true]:bg-dark-1/[.15]',
          'data-[active=true]:dark:text-light-1',
          'data-[active=true]:dark:bg-light-1/[.15]'
        ],
        button: [
          'text-black',
          'dark:text-white'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'dark',
      class: {
        itemsButton: [
          'data-[active=true]:text-dark-5',
          'data-[active=true]:bg-dark-5/[.15]',
          'data-[active=true]:dark:bg-dark-5/[.15]'
        ]
      }
    },
    // link & color
    {
      variant: 'link',
      color: 'primary',
      class: {
        itemsButton: [
          'data-[active=true]:text-primary-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'secondary',
      class: {
        itemsButton: [
          'data-[active=true]:text-secondary-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'success',
      class: {
        itemsButton: [
          'data-[active=true]:text-success-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'info',
      class: {
        itemsButton: [
          'data-[active=true]:text-info-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'warning',
      class: {
        itemsButton: [
          'data-[active=true]:text-warning-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'error',
      class: {
        itemsButton: [
          'data-[active=true]:text-error-500'
        ]
      }
    },
    {
      variant: 'link',
      color: 'light',
      class: {
        itemsButton: [
          'data-[active=true]:text-light-1'
        ]
      }
    },
    {
      variant: 'link',
      color: 'dark',
      class: {
        itemsButton: [
          'data-[active=true]:text-dark-5'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
