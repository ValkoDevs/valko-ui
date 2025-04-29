import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-switch__container',
      'w-fit',
      'flex',
      'justify-start',
      'items-center'
    ],
    switch: [
      'border-2',
      'shrink-0',
      'cursor-pointer',
      'flex',
      'items-center',
      'transition-all',
      'duration-200',
      'ease-in-out',
      'relative',
      'shadow-sm'
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
    label: [
      'vk-switch__label'
    ]
  },
  variants: {
    size: {
      xs: {
        switch: [
          'h-[1rem]',
          'w-[2rem]'
        ],
        thumb: [
          'h-[0.750rem]',
          'w-[0.750rem]'
        ],
        label: [
          'text-xs'
        ]
      },
      sm: {
        switch: [
          'h-[1.250rem]',
          'w-[2.5rem]'
        ],
        thumb: [
          'h-[1rem]',
          'w-[1rem]'
        ],
        label: [
          'text-sm'
        ]
      },
      md: {
        switch: [
          'h-[1.5rem]',
          'w-[3rem]'
        ],
        thumb: [
          'h-[1.250rem]',
          'w-[1.250rem]'
        ],
        label: [
          'text-base'
        ]
      },
      lg: {
        switch: [
          'h-[1.750rem]',
          'w-[3.5rem]'
        ],
        thumb: [
          'h-[1.5rem]',
          'w-[1.5rem]'
        ],
        label: [
          'text-lg'
        ]
      }
    },
    variant: {
      filled: {
        switch: [
          'bg-surface-container'
        ],
        thumb: [
          'bg-on-surface-variant'
        ]
      },
      outlined: {
        switch: [
          'border-outlined'
        ],
        thumb: [
          'scale-[.9]',
          'bg-on-surface-variant'
        ]
      },
      ghost: {
        switch: [
          'border-transparent',
          'bg-surface-container/[.15]',
          'shadow-none'
        ],
        thumb: [
          'bg-surface-container/[.5]'
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
        switch: [
          'rounded-full'
        ],
        thumb: [
          'rounded-full'
        ]
      },
      soft: {
        switch: [
          'rounded'
        ],
        thumb: [
          'rounded'
        ]
      },
      square: {
        switch: [
          'rounded-none'
        ],
        thumb: [
          'rounded-none'
        ]
      }
    },
    disabled: {
      true: {
        switch: [
          'pointer-events-none',
          'bg-gray-500/[.3]',
          'dark:bg-gray-500/[.3]'
        ],
        thumb: [
          'bg-gray-500/[.2]',
          'dark:bg-gray-500/[.2]'
        ]
      }
    },
    labelPosition: {
      left: {
        content: [
          'flex-row-reverse'
        ],
        label: [
          'ml-2'
        ]
      },
      right: {
        label: [
          'mr-2'
        ]
      }
    },
    flat: {
      true: {
        switch: [
          'shadow-none'
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
        switch: [
          'data-[active=true]:bg-primary',
          'data-[active=true]:border-primary',
          'dark:data-[active=true]:bg-primary',
          'dark:data-[active=true]:border-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-secondary',
          'data-[active=true]:border-secondary',
          'dark:data-[active=true]:bg-secondary',
          'dark:data-[active=true]:border-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-positive',
          'data-[active=true]:border-positive',
          'dark:data-[active=true]:bg-positive',
          'dark:data-[active=true]:border-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-accent',
          'data-[active=true]:border-accent',
          'dark:data-[active=true]:bg-accent',
          'dark:data-[active=true]:border-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-warning',
          'data-[active=true]:border-warning',
          'dark:data-[active=true]:bg-warning',
          'dark:data-[active=true]:border-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-negative',
          'data-[active=true]:border-negative',
          'dark:data-[active=true]:bg-negative',
          'dark:data-[active=true]:border-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:border-primary',
          'dark:data-[active=true]:border-primary'
        ],
        thumb: [
          'data-[selected=true]:bg-primary',
          'dark:data-[selected=true]:bg-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:border-secondary',
          'dark:data-[active=true]:border-secondary'
        ],
        thumb: [
          'data-[selected=true]:bg-secondary',
          'dark:data-[selected=true]:bg-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:border-positive',
          'dark:data-[active=true]:border-positive'
        ],
        thumb: [
          'data-[selected=true]:bg-positive',
          'dark:data-[selected=true]:bg-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:border-accent',
          'dark:data-[active=true]:border-accent'
        ],
        thumb: [
          'data-[selected=true]:bg-accent',
          'dark:data-[selected=true]:bg-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:border-warning',
          'dark:data-[active=true]:border-warning'
        ],
        thumb: [
          'data-[selected=true]:bg-warning',
          'dark:data-[selected=true]:bg-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:border-negative',
          'dark:data-[active=true]:border-negative'
        ],
        thumb: [
          'data-[selected=true]:bg-negative',
          'dark:data-[selected=true]:bg-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-primary-container',
          'dark:data-[active=true]:bg-primary-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-primary-container',
          'dark:data-[selected=true]:bg-on-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-secondary-container',
          'dark:data-[active=true]:bg-secondary-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-secondary-container',
          'dark:data-[selected=true]:bg-on-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-positive-container',
          'dark:data-[active=true]:bg-positive-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-positive-container',
          'dark:data-[selected=true]:bg-on-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-accent-container',
          'dark:data-[active=true]:bg-accent-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-accent-container',
          'dark:data-[selected=true]:bg-on-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-warning-container',
          'dark:data-[active=true]:bg-warning-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-warning-container',
          'dark:data-[selected=true]:bg-on-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-negative-container',
          'dark:data-[active=true]:bg-negative-container'
        ],
        thumb: [
          'data-[selected=true]:bg-on-negative-container',
          'dark:data-[selected=true]:bg-on-negative-container'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
