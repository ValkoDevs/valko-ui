import { tv } from 'tailwind-variants'

const switchStyles = tv({
  slots: {
    container: [
      'vk-switch__container',
      'w-fit',
      'flex',
      'justify-start',
      'items-center'
    ],
    switchSlot: [
      'border-2',
      'shrink-0',
      'cursor-pointer',
      'flex',
      'items-center',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'relative',
      'border-outlined'
    ],
    thumb: [
      'inline-block',
      'ring-0',
      'pointer-events-none',
      'transition-all',
      'transform',
      'duration-200',
      'ease-in-out',
      'absolute',
      'data-[selected=false]:left-0',
      'data-[selected=true]:left-full',
      'data-[selected=true]:-translate-x-full'
    ],
    content: [
      'flex',
      'items-center'
    ],
    labelSlot: [
      'vk-switch__label'
    ]
  },
  variants: {
    size: {
      xs: {
        switchSlot: [
          'h-[1rem]',
          'w-[2rem]'
        ],
        thumb: [
          'h-[0.750rem]',
          'w-[0.750rem]'
        ],
        labelSlot: [
          'text-xs'
        ]
      },
      sm: {
        switchSlot: [
          'h-[1.250rem]',
          'w-[2.5rem]'
        ],
        thumb: [
          'h-[1rem]',
          'w-[1rem]'
        ],
        labelSlot: [
          'text-sm'
        ]
      },
      md: {
        switchSlot: [
          'h-[1.5rem]',
          'w-[3rem]'
        ],
        thumb: [
          'h-[1.250rem]',
          'w-[1.250rem]'
        ],
        labelSlot: [
          'text-base'
        ]
      },
      lg: {
        switchSlot: [
          'h-[1.750rem]',
          'w-[3.5rem]'
        ],
        thumb: [
          'h-[1.5rem]',
          'w-[1.5rem]'
        ],
        labelSlot: [
          'text-lg'
        ]
      }
    },
    variant: {
      filled: {
        switchSlot: [
          'bg-surface-container-highest'
        ],
        thumb: [
          'bg-outlined',
          'scale-[.9]'
        ]
      },
      outlined: {
        switchSlot: [
          'border-outlined'
        ],
        thumb: [
          'scale-[.9]',
          'bg-outlined'
        ]
      },
      ghost: {
        switchSlot: [
          'border-transparent',
          'bg-surface-container-highest/[.5]'
        ],
        thumb: [
          'bg-outlined/[.5]'
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
    shape: {
      rounded: {
        switchSlot: [
          'rounded-full'
        ],
        thumb: [
          'rounded-full'
        ]
      },
      soft: {
        switchSlot: [
          'rounded-xs'
        ],
        thumb: [
          'rounded-xs'
        ]
      },
      square: {
        switchSlot: [
          'rounded-none'
        ],
        thumb: [
          'rounded-none'
        ]
      }
    },
    disabled: {
      true: {
        switchSlot: [
          'pointer-events-none',
          'bg-disabled/[.3]',
          'border-disabled-container'
        ],
        thumb: [
          'bg-disabled/[.2]'
        ]
      }
    },
    labelPosition: {
      left: {
        content: [
          'flex-row-reverse'
        ],
        labelSlot: [
          'ml-2'
        ]
      },
      right: {
        labelSlot: [
          'mr-2'
        ]
      }
    }
  },
  compoundVariants: [
    // filled & color
    {
      variant: 'filled',
      color: 'primary',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-primary',
          'data-[active=true]:border-primary'
        ],
        thumb: [
          'data-[selected=true]:bg-on-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-secondary',
          'data-[active=true]:border-secondary'
        ],
        thumb: [
          'data-[selected=true]:bg-on-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-positive',
          'data-[active=true]:border-positive'
        ],
        thumb: [
          'data-[selected=true]:bg-on-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-accent',
          'data-[active=true]:border-accent'
        ],
        thumb: [
          'data-[selected=true]:bg-on-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-warning',
          'data-[active=true]:border-warning'
        ],
        thumb: [
          'data-[selected=true]:bg-on-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-negative',
          'data-[active=true]:border-negative'
        ],
        thumb: [
          'data-[selected=true]:bg-on-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:border-primary'
        ],
        thumb: [
          'data-[selected=true]:bg-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:border-secondary'
        ],
        thumb: [
          'data-[selected=true]:bg-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:border-positive'
        ],
        thumb: [
          'data-[selected=true]:bg-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:border-accent'
        ],
        thumb: [
          'data-[selected=true]:bg-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:border-warning'
        ],
        thumb: [
          'data-[selected=true]:bg-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:border-negative'
        ],
        thumb: [
          'data-[selected=true]:bg-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-primary-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-secondary-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-positive-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-accent-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-warning-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      disabled: false,
      class: {
        switchSlot: [
          'data-[active=true]:bg-negative-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-negative-container'
        ]
      }
    }
  ]
})

export default switchStyles
export type SwitchSlots = typeof switchStyles.slots
