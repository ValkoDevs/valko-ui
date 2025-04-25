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
      'shadow-sm',
      'shadow-dark-800'
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
          'bg-light-300',
          'border-light-300',
          'dark:bg-dark-700',
          'dark:border-dark-700'
        ],
        thumb: [
          'bg-light-100',
          'dark:bg-light-200'
        ]
      },
      outlined: {
        switch: [
          'border-light-400',
          'dark:border-dark-600'
        ],
        thumb: [
          'scale-[.9]',
          'bg-light-400',
          'dark:bg-dark-600'
        ]
      },
      ghost: {
        switch: [
          'border-transparent',
          'bg-light-400/[.15]',
          'shadow-none',
          'dark:bg-dark-700/[.15]'
        ],
        thumb: [
          'bg-light-400/[.5]',
          'dark:bg-dark-950/[.5]'
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
          'data-[active=true]:bg-primary-500',
          'data-[active=true]:border-primary-500',
          'dark:data-[active=true]:bg-primary-500',
          'dark:data-[active=true]:border-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-dark-950',
          'data-[active=true]:border-dark-950',
          'dark:data-[active=true]:bg-light-200',
          'dark:data-[active=true]:border-light-200'
        ],
        thumb: [
          'bg-light-100',
          'dark:bg-dark-800'
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
          'data-[active=true]:border-primary-500',
          'dark:data-[active=true]:border-primary-500'
        ],
        thumb: [
          'data-[selected=true]:bg-primary-500',
          'dark:data-[selected=true]:bg-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:border-dark-900',
          'dark:data-[active=true]:border-light-200'
        ],
        thumb: [
          'data-[selected=true]:bg-dark-900',
          'dark:data-[selected=true]:bg-light-200'
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
          'data-[active=true]:bg-primary-500/[.15]',
          'dark:data-[active=true]:bg-primary-500/[.15]'
        ],
        thumb: [
          'data-[selected=true]:bg-primary-500/[.5]',
          'dark:data-[selected=true]:bg-primary-500/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-dark-950/[.4]',
          'dark:data-[active=true]:bg-light-100/[.4]'
        ],
        thumb: [
          'data-[selected=true]:bg-dark-950/[.5]',
          'dark:data-[selected=true]:bg-light-100/[.5]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-positive',
          'dark:data-[active=true]:bg-positive'
        ],
        thumb: [
          'data-[selected=true]:bg-positive',
          'dark:data-[selected=true]:bg-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-accent',
          'dark:data-[active=true]:bg-accent'
        ],
        thumb: [
          'data-[selected=true]:bg-accent',
          'dark:data-[selected=true]:bg-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-warning/[.15]',
          'dark:data-[active=true]:bg-warning/[.15]'
        ],
        thumb: [
          'data-[selected=true]:bg-warning',
          'dark:data-[selected=true]:bg-warning'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      disabled: false,
      class: {
        switch: [
          'data-[active=true]:bg-negative',
          'dark:data-[active=true]:bg-negative'
        ],
        thumb: [
          'data-[selected=true]:bg-negative',
          'dark:data-[selected=true]:bg-negative'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
