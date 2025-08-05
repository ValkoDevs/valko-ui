import { type TV, tv } from 'tailwind-variants'

export default tv({
  slots: {
    notification: [
      'vk-notification',
      'shadow-el3',
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
      filled: {},
      ghost: {
        notification: [
          'backdrop-blur'
        ]
      },
      outlined: {
        notification: [
          'border-2',
          'bg-inverse-on-surface'
        ],
        content: [
          'p-[calc(0.75rem_-_2px)]'
        ]
      },
      line: {
        notification: [
          'bg-inverse-surface',
          'text-inverse-on-surface'
        ]
      },
      gradient: {
        notification: [
          'bg-gradient-to-b'
        ],
        progressbar: [
          'bg-inverse-on-surface'
        ]
      }
    },
    color: {
      primary: {},
      secondary: {},
      positive: {},
      accent: {},
      warning: {},
      negative: {},
      surface: {}
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
    }
  },
  compoundVariants: [
    // filled & color
    {
      variant: 'filled',
      color: 'primary',
      class: {
        notification: [
          'bg-primary',
          'text-on-primary'
        ],
        progressbar: [
          'bg-on-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        notification: [
          'bg-secondary',
          'text-on-secondary'
        ],
        progressbar: [
          'bg-on-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        notification: [
          'bg-positive',
          'text-on-positive'
        ],
        progressbar: [
          'bg-on-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        notification: [
          'bg-accent',
          'text-on-accent'
        ],
        progressbar: [
          'bg-on-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        notification: [
          'bg-warning',
          'text-on-warning'
        ],
        progressbar: [
          'bg-on-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        notification: [
          'bg-negative',
          'text-on-negative'
        ],
        progressbar: [
          'bg-on-negative'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'surface',
      class: {
        notification: [
          'bg-inverse-surface',
          'text-inverse-on-surface'
        ],
        progressbar: [
          'bg-inverse-on-surface'
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
    {
      variant: 'outlined',
      color: 'surface',
      class: {
        notification: [
          'border-outlined',
          'text-on-surface-variant'
        ],
        progressbar: [
          'bg-outlined'
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
          'bg-on-primary-container'
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
          'bg-on-secondary-container'
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
          'bg-on-positive-container'
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
          'bg-on-accent-container'
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
          'bg-on-warning-container'
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
          'bg-on-negative-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'surface',
      class: {
        notification: [
          'bg-inverse-surface/[.6]',
          'text-inverse-on-surface'
        ],
        progressbar: [
          'bg-inverse-on-surface'
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
    {
      variant: 'line',
      color: 'surface',
      class: {
        progressbar: [
          'bg-inverse-on-surface'
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
          'to-primary-gradient-end',
          'text-on-primary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        notification: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end',
          'text-on-secondary'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        notification: [
          'from-positive-gradient-start',
          'to-positive-gradient-end',
          'text-on-positive'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        notification: [
          'from-accent-gradient-start',
          'to-accent-gradient-end',
          'text-on-accent'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        notification: [
          'from-warning-gradient-start',
          'to-warning-gradient-end',
          'text-on-warning'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        notification: [
          'from-negative-gradient-start',
          'to-negative-gradient-end',
          'text-on-negative'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'surface',
      class: {
        notification: [
          'from-surface-container',
          'to-surface-container-highest',
          'text-on-surface'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
