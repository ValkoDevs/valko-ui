import { tv, type TV } from 'tailwind-variants'

export default tv({
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
    radio: [
      'vk-radio__radio',
      'shadow-lg',
      'border-2',
      'border-outlined',
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
      'text-gray-500'
    ],
    label: [
      'cursor-pointer'
    ],
    icon: [
      'vk-radio__icon',
      'text-white',
      'dark:text-black'
    ]
  },
  variants: {
    size: {
      xs: {
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
          'bg-surface-container/[.15]',
          'shadow-none'
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
          'bg-gray-600',
          'border-gray-600',
          'opacity-50',
          'cursor-not-allowed',
          'data-[checked=true]:border-gray-600',
          'data-[checked=true]:bg-gray-600'
        ],
        icon: [
          'text-gray-600'
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
        radio: [
          'rounded'
        ]
      },
      rounded: {
        radio: [
          'rounded-full'
        ]
      },
      square: {
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
        radio: [
          'data-[checked=true]:bg-secondary',
          'data-[checked=true]:border-secondary',
          'data-[indeterminate=true]:border-secondary',
          'data-[indeterminate=true]:bg-secondary',
          'dark:data-[checked=true]:bg-secondary',
          'dark:data-[checked=true]:border-secondary',
          'dark:data-[indeterminate=true]:border-secondary',
          'dark:data-[indeterminate=true]:bg-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
          'data-[checked=true]:border-secondary',
          'data-[indeterminate=true]:border-secondary',
          'dark:data-[checked=true]:border-secondary',
          'dark:data-[indeterminate=true]:border-secondary'
        ],
        icon: [
          'text-secondary',
          'dark:text-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      disabled: false,
      class: {
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
        radio: [
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
