import { tv } from 'tailwind-variants'

const radio = tv({
  slots: {
    container: [
      'vk-radio',
      'w-fit',
      'flex',
      'flex-col',
      'gap-1'
    ],
    radioContainer: [
      'vk-radio__radio-container',
      'w-fit',
      'flex',
      'justify-center',
      'items-center',
      'gap-1',
      'cursor-pointer'
    ],
    stateLayer: [
      'group',
      'hover:bg-state-hover',
      'focus:bg-state-focus',
      'active:bg-state-active'
    ],
    radio: [
      'vk-radio__radio',
      'size-full',
      'border-2',
      'border-on-surface-variant',
      'relative',
      'flex',
      'items-center',
      'justify-center'
    ],
    input: [
      'hidden'
    ],
    helpertext: [
      'vk-radio__helpertext',
      'break-normal',
      'text-on-surface-variant'
    ],
    label: [
      'cursor-pointer'
    ],
    icon: [
      'vk-radio__icon',
      'text-surface'
    ]
  },
  variants: {
    size: {
      xs: {
        stateLayer: [
          'w-3.5',
          'h-3.5'
        ],
        label: [
          'text-xs'
        ],
        icon: [
          'text-xs'
        ],
        helpertext: [
          'text-xs'
        ]
      },
      sm: {
        stateLayer: [
          'w-4',
          'h-4'
        ],
        label: [
          'text-sm'
        ],
        icon: [
          'text-sm'
        ],
        helpertext: [
          'text-xs'
        ]
      },
      md: {
        stateLayer: [
          'w-5',
          'h-5'
        ],
        label: [
          'text-base'
        ],
        icon: [
          'text-base'
        ],
        helpertext: [
          'text-sm'
        ]
      },
      lg: {
        stateLayer: [
          'w-6',
          'h-6'
        ],
        label: [
          'text-lg'
        ],
        icon: [
          'text-lg'
        ],
        helpertext: [
          'text-base'
        ]
      }
    },
    variant: {
      filled: {},
      outlined: {},
      ghost: {
        radio: [
          'border-0',
          'bg-on-surface-variant/[.15]'
        ]
      }
    },
    color: {
      primary: {},
      secondary: {},
      positive: {
        helpertext: [
          'text-positive'
        ]
      },
      accent: {
        helpertext: [
          'text-accent'
        ]
      },
      warning: {
        helpertext: [
          'text-warning'
        ]
      },
      negative: {
        helpertext: [
          'text-negative'
        ]
      }
    },
    disabled: {
      true: {
        radio: [
          'bg-disabled',
          'border-disabled',
          'opacity-50',
          'cursor-not-allowed',
          'group-data-[state=checked]:border-disabled',
          'group-data-[state=checked]:bg-disabled'
        ],
        icon: [
          'text-on-disabled'
        ],
        label: [
          'cursor-not-allowed'
        ]
      }
    },
    labelPosition: {
      left: {
        container: [
          'flex-row-reverse',
          'justify-end'
        ],
        label: [
          'mr-2'
        ]
      },
      right: {
        label: [
          'ml-2'
        ]
      }
    },
    shape: {
      soft: {
        stateLayer: [
          'rounded-sm'
        ],
        radio: [
          'rounded-sm'
        ]
      },
      rounded: {
        stateLayer: [
          'rounded-full'
        ],
        radio: [
          'rounded-full'
        ]
      },
      square: {
        stateLayer: [
          'rounded-none'
        ],
        radio: [
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
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-primary',
          'group-data-[state=checked]:border-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-secondary',
          'group-data-[state=checked]:border-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-positive',
          'group-data-[state=checked]:border-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-accent',
          'group-data-[state=checked]:border-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-warning',
          'group-data-[state=checked]:border-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-negative',
          'group-data-[state=checked]:border-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:border-primary'
        ],
        icon: [
          'text-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:border-secondary'
        ],
        icon: [
          'text-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:border-positive'
        ],
        icon: [
          'text-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:border-accent'
        ],
        icon: [
          'text-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:border-warning'
        ],
        icon: [
          'text-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:border-negative'
        ],
        icon: [
          'text-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-primary-container'
        ],
        icon: [
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-secondary-container'
        ],
        icon: [
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-positive-container'
        ],
        icon: [
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-accent-container'
        ],
        icon: [
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-warning-container'
        ],
        icon: [
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      disabled: false,
      class: {
        radio: [
          'group-data-[state=checked]:bg-negative-container'
        ],
        icon: [
          'text-on-negative-container'
        ]
      }
    }
  ]
})

export default radio
export type RadioSlots = typeof radio.slots
