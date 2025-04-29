import { type TV, tv } from 'tailwind-variants'

export default tv({
  slots: {
    notification: [
      'vk-notification',
      'shadow-md',
      'overflow-hidden'
    ],
    container: [
      'w-full',
      'flex',
      'justify-start',
      'items-start'
    ],
    content: [
      'w-full',
      'p-3',
      'break-words',
      'flex',
      'justify-start',
      'items-start'
    ],
    progressbar: [
      'vk-notification__progressbar',
      'absolute',
      'bottom-0',
      'left-0',
      'transition-all',
      'duration-100'
    ],
    icon: [
      'ti',
      'ti-x',
      'p-2',
      'text-xs'
    ]
  },
  variants: {
    variant: {
      filled: {
        notification: [
          'text-white'
        ],
        progressbar: [
          'bg-white'
        ]
      },
      ghost: {
        notification: [
          'shadow-none',
          'backdrop-blur'
        ]
      },
      outlined: {
        notification: [
          'border-2',
          'bg-surface-container'
        ],
        content: [
          'p-[calc(0.75rem_-_2px)]'
        ]
      },
      line: {
        notification: [
          'bg-surface-container'
        ]
      },
      gradient: {
        notification: [
          'bg-gradient-to-br',
          'text-white'
        ],
        progressbar: [
          'bg-white'
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
    size: {
      xs: {
        notification: [
          'w-40'
        ],
        content: [
          'text-xs'
        ],
        progressbar: [
          'h-0.5'
        ]
      },
      sm: {
        notification: [
          'w-44'
        ],
        content: [
          'text-sm'
        ],
        progressbar: [
          'h-0.5'
        ]
      },
      md: {
        notification: [
          'w-48'
        ],
        content: [
          'text-base'
        ],
        progressbar: [
          'h-[3px]'
        ]
      },
      lg: {
        notification: [
          'w-52'
        ],
        content: [
          'text-lg'
        ],
        progressbar: [
          'h-1'
        ]
      }
    },
    shape: {
      rounded: {
        notification: [
          'rounded-full'
        ]
      },
      soft: {
        notification: [
          'rounded-lg'
        ]
      },
      square: {
        notification: [
          'rounded-none'
        ]
      }
    },
    flat: {
      true: {
        notification: [
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
      class: {
        notification: [
          'bg-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        notification: [
          'bg-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        notification: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        notification: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        notification: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        notification: [
          'bg-negative'
        ]
      }
    },
    // outlined & color
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        notification: [
          'border-primary',
          'text-primary'
        ],
        progressbar: [
          'bg-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        notification: [
          'border-secondary',
          'text-secondary'
        ],
        progressbar: [
          'bg-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      class: {
        notification: [
          'border-positive',
          'text-positive'
        ],
        progressbar: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      class: {
        notification: [
          'border-accent',
          'text-accent'
        ],
        progressbar: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        notification: [
          'border-warning',
          'text-warning'
        ],
        progressbar: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      class: {
        notification: [
          'border-negative',
          'text-negative'
        ],
        progressbar: [
          'bg-negative'
        ]
      }
    },
    // ghost & color
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        notification: [
          'bg-primary-container',
          'text-on-primary-container'
        ],
        progressbar: [
          'bg-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        notification: [
          'bg-secondary-container',
          'text-on-secondary-container'
        ],
        progressbar: [
          'bg-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        notification: [
          'bg-positive-container',
          'text-on-positive-container'
        ],
        progressbar: [
          'bg-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        notification: [
          'bg-accent-container',
          'text-on-accent-container'
        ],
        progressbar: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        notification: [
          'bg-warning-container',
          'text-on-warning-container'
        ],
        progressbar: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        notification: [
          'bg-negative-container',
          'text-on-negative-container'
        ],
        progressbar: [
          'bg-negative'
        ]
      }
    },
    // line & color
    {
      variant: 'line',
      color: 'primary',
      class: {
        progressbar: [
          'bg-primary'
        ]
      }
    },
    {
      variant: 'line',
      color: 'secondary',
      class: {
        progressbar: [
          'bg-secondary'
        ]
      }
    },
    {
      variant: 'line',
      color: 'positive',
      class: {
        progressbar: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'line',
      color: 'accent',
      class: {
        progressbar: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'line',
      color: 'warning',
      class: {
        progressbar: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'line',
      color: 'negative',
      class: {
        progressbar: [
          'bg-negative'
        ]
      }
    },
    // gradient & color
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        notification: [
          'from-primary-gradient-start',
          'to-primary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        notification: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        notification: [
          'from-positive-gradient-start',
          'to-positive-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        notification: [
          'from-accent-gradient-start',
          'to-accent-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        notification: [
          'from-warning-gradient-start',
          'to-warning-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        notification: [
          'from-negative-gradient-start',
          'to-negative-gradient-end'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
