import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-checkbox',
      'w-fit',
      'flex',
      'flex-col',
      'gap-1'
    ],
    checkboxContainer: [
      'vk-checkbox__container',
      'w-fit',
      'flex',
      'justify-center',
      'items-center',
      'gap-1',
      'cursor-pointer'
    ],
    stateLayer: [
      'hover:bg-state-hover',
      'focus:bg-state-focus',
      'active:bg-state-active'
    ],
    checkbox: [
      'vk-checkbox__checkbox',
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
      'vk-checkbox__helpertext',
      'break-normal',
      'text-on-surface-variant'
    ],
    label: [
      'cursor-pointer'
    ],
    icon: [
      'text-white',
      'dark:text-black'
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
        checkbox: [
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
        checkbox: [
          'bg-disabled',
          'text-on-disabled',
          'opacity-50',
          'cursor-not-allowed',
          'data-[checked=true]:border-disabled',
          'data-[checked=true]:bg-disabled'
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
      rounded: {
        stateLayer: [
          'rounded-full'
        ],
        checkbox: [
          'rounded-full'
        ]
      },
      soft: {
        stateLayer: [
          'rounded-sm'
        ],
        checkbox: [
          'rounded-sm'
        ]
      },
      square: {
        stateLayer: [
          'rounded-none'
        ],
        checkbox: [
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
        checkbox: [
          'data-[checked=true]:bg-primary',
          'data-[checked=true]:border-primary',
          'data-[indeterminate=true]:border-primary',
          'data-[indeterminate=true]:bg-primary',
          'dark:data-[checked=true]:bg-primary',
          'dark:data-[checked=true]:border-primary',
          'dark:data-[indeterminate=true]:border-primary',
          'dark:data-[indeterminate=true]:bg-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-secondary',
          'data-[checked=true]:border-secondary',
          'data-[indeterminate=true]:border-secondary',
          'data-[indeterminate=true]:bg-secondary',
          'dark:data-[checked=true]:bg-secondary',
          'dark:data-[checked=true]:border-secondary',
          'dark:data-[indeterminate=true]:border-secondary',
          'dark:data-[indeterminate=true]:bg-secondary'
        ],
        icon: [
          'text-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-positive',
          'data-[checked=true]:border-positive',
          'data-[indeterminate=true]:border-positive',
          'data-[indeterminate=true]:bg-positive',
          'dark:data-[checked=true]:bg-positive',
          'dark:data-[checked=true]:border-positive',
          'dark:data-[indeterminate=true]:border-positive',
          'dark:data-[indeterminate=true]:bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-accent',
          'data-[checked=true]:border-accent',
          'data-[indeterminate=true]:border-accent',
          'data-[indeterminate=true]:bg-accent',
          'dark:data-[checked=true]:bg-accent',
          'dark:data-[checked=true]:border-accent',
          'dark:data-[indeterminate=true]:border-accent',
          'dark:data-[indeterminate=true]:bg-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-warning',
          'data-[checked=true]:border-warning',
          'data-[indeterminate=true]:border-warning',
          'data-[indeterminate=true]:bg-warning',
          'dark:data-[checked=true]:bg-warning',
          'dark:data-[checked=true]:border-warning',
          'dark:data-[indeterminate=true]:border-warning',
          'dark:data-[indeterminate=true]:bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-negative',
          'data-[checked=true]:border-negative',
          'data-[indeterminate=true]:border-negative',
          'data-[indeterminate=true]:bg-negative',
          'dark:data-[checked=true]:bg-negative',
          'dark:data-[checked=true]:border-negative',
          'dark:data-[indeterminate=true]:border-negative',
          'dark:data-[indeterminate=true]:bg-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:border-primary',
          'data-[indeterminate=true]:border-primary',
          'dark:data-[checked=true]:border-primary',
          'dark:data-[indeterminate=true]:border-primary'
        ],
        icon: [
          'text-primary',
          'dark:text-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:border-secondary',
          'data-[indeterminate=true]:border-secondary',
          'dark:data-[checked=true]:border-secondary',
          'dark:data-[indeterminate=true]:border-secondary'
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
        checkbox: [
          'data-[checked=true]:border-positive',
          'data-[indeterminate=true]:border-positive',
          'dark:data-[checked=true]:border-positive',
          'dark:data-[indeterminate=true]:border-positive'
        ],
        icon: [
          'text-positive',
          'dark:text-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:border-accent',
          'data-[indeterminate=true]:border-accent',
          'dark:data-[checked=true]:border-accent',
          'dark:data-[indeterminate=true]:border-accent'
        ],
        icon: [
          'text-accent',
          'dark:text-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:border-warning',
          'data-[indeterminate=true]:border-warning',
          'dark:data-[checked=true]:border-warning',
          'dark:data-[indeterminate=true]:border-warning'
        ],
        icon: [
          'text-warning',
          'dark:text-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:border-negative',
          'data-[indeterminate=true]:border-negative',
          'dark:data-[checked=true]:border-negative',
          'dark:data-[indeterminate=true]:border-negative'
        ],
        icon: [
          'text-negative',
          'dark:text-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        checkbox: [
          'data-[checked=true]:bg-primary-container',
          'data-[indeterminate=true]:bg-primary-container',
          'dark:data-[checked=true]:bg-primary-container',
          'dark:data-[indeterminate=true]:bg-primary-container'
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
        checkbox: [
          'data-[checked=true]:bg-secondary-container',
          'data-[indeterminate=true]:bg-secondary-container',
          'dark:data-[checked=true]:bg-secondary-container',
          'dark:data-[indeterminate=true]:bg-secondary-container'
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
        checkbox: [
          'data-[checked=true]:bg-positive-container',
          'data-[indeterminate=true]:bg-positive-container',
          'dark:data-[checked=true]:bg-positive-container',
          'dark:data-[indeterminate=true]:bg-positive-container'
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
        checkbox: [
          'data-[checked=true]:bg-accent-container',
          'data-[indeterminate=true]:bg-accent-container',
          'dark:data-[checked=true]:bg-accent-container',
          'dark:data-[indeterminate=true]:bg-accent-container'
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
        checkbox: [
          'data-[checked=true]:bg-warning-container',
          'data-[indeterminate=true]:bg-warning-container',
          'dark:data-[checked=true]:bg-warning-container',
          'dark:data-[indeterminate=true]:bg-warning-container'
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
        checkbox: [
          'data-[checked=true]:bg-negative-container',
          'data-[indeterminate=true]:bg-negative-container',
          'dark:data-[checked=true]:bg-negative-container',
          'dark:data-[indeterminate=true]:bg-negative-container'
        ],
        icon: [
          'text-on-negative-container'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
