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
          'text-light-50'
        ],
        progressbar: [
          'bg-light-50'
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
          'bg-light-50',
          'dark:bg-dark-800'
        ],
        content: [
          'p-[calc(0.75rem_-_2px)]'
        ]
      },
      line: {
        notification: [
          'bg-light-200',
          'dark:bg-dark-800'
        ]
      },
      gradient: {
        notification: [
          'bg-gradient-to-br',
          'text-light-50'
        ],
        progressbar: [
          'bg-light-50'
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
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        notification: [
          'bg-light-300',
          'text-dark-600',
          'dark:bg-dark-800',
          'dark:text-light-200'
        ],
        progressbar: [
          'bg-dark-600',
          'dark:bg-light-200'
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
          'border-primary-500',
          'text-primary-500'
        ],
        progressbar: [
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        notification: [
          'border-light-300',
          'text-dark-600',
          'dark:border-dark-700',
          'dark:text-light-200'
        ],
        progressbar: [
          'bg-light-300',
          'dark:bg-dark-700'
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
          'bg-primary-500/[.20]',
          'text-primary-500'
        ],
        progressbar: [
          'bg-primary-500/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        notification: [
          'bg-light-300/[.20]',
          'text-dark-600',
          'dark:bg-dark-700/[.20]',
          'dark:text-light-200'
        ],
        progressbar: [
          'bg-light-300/[.40]',
          'dark:bg-dark-700/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        notification: [
          'bg-positive',
          'text-positive'
        ],
        progressbar: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        notification: [
          'bg-accent',
          'text-accent'
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
          'bg-warning/[.20]',
          'text-warning'
        ],
        progressbar: [
          'bg-warning/[.40]'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        notification: [
          'bg-negative',
          'text-negative'
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
          'bg-primary-500'
        ]
      }
    },
    {
      variant: 'line',
      color: 'secondary',
      class: {
        progressbar: [
          'bg-light-300',
          'dark:bg-dark-700'
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
          'from-primary-500',
          'to-primary-900'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        notification: [
          'from-light-200',
          'to-light-400',
          'text-dark-600',
          'dark:from-dark-600',
          'dark:to-dark-950',
          'dark:text-light-200'
        ],
        progressbar: [
          'bg-dark-600',
          'dark:bg-light-200'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        notification: [
          'from-positive',
          'to-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        notification: [
          'from-accent',
          'to-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        notification: [
          'from-warning',
          'to-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        notification: [
          'from-negative',
          'to-negative'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
