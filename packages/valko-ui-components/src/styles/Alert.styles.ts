import { tv, type TV } from 'tailwind-variants'

export default tv({
  slots: {
    container: [
      'vk-alert__container',
      'w-full',
      'p-2',
      'flex',
      'gap-2'
    ],
    mainIcon: [
      'mt-1'
    ],
    contentContainer: [
      'flex',
      'flex-col',
      'grow'
    ],
    title: [
      'font-bold'
    ],
    p: [
      'vk-alert__p',
      'font-medium',
      'break-normal'
    ],
    closeIcon: [
      'vk-alert__close'
    ]
  },
  variants: {
    variant: {
      filled: {
        container: [
          'vk-alert__filled'
        ]
      },
      ghost: {
        container: [
          'vk-alert__ghost'
        ]
      },
      outlined: {
        container: [
          'p-[calc(1rem_-_2px)]',
          'border-2'
        ]
      },
      gradient: {
        container: [
          'bg-gradient-to-br'
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
        title: [
          'text-sm'
        ],
        mainIcon: [
          'text-sm'
        ],
        p: [
          'text-xs'
        ]
      },
      sm: {
        title: [
          'text-base'
        ],
        mainIcon: [
          'text-base'
        ],
        p: [
          'text-sm'
        ]
      },
      md: {
        title: [
          'text-lg'
        ],
        mainIcon: [
          'text-lg'
        ],
        p: [
          'text-base'
        ]
      },
      lg: {
        title: [
          'text-xl'
        ],
        mainIcon: [
          'text-xl'
        ],
        p: [
          'text-lg'
        ]
      }
    },
    shape: {
      rounded: {
        container: [
          'rounded-3xl'
        ]
      },
      soft: {
        container: [
          'rounded-lg'
        ]
      },
      square: {
        container: [
          'rounded-none'
        ]
      }
    },
    elevated: {
      true: {
        container: [
          'shadow-el2'
        ]
      }
    }
  },
  compoundVariants: [
    // filled & color (container)
    {
      variant: 'filled',
      color: 'primary',
      class: {
        container: [
          'bg-primary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'secondary',
      class: {
        container: [
          'bg-secondary'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'positive',
      class: {
        container: [
          'bg-positive'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'accent',
      class: {
        container: [
          'bg-accent'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'warning',
      class: {
        container: [
          'bg-warning'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'negative',
      class: {
        container: [
          'bg-negative'
        ]
      }
    },
    {
      variant: 'filled',
      color: 'surface',
      class: {
        container: [
          'bg-surface-container-highest'
        ]
      }
    },
    // outlined & color (container)
    {
      variant: 'outlined',
      color: 'primary',
      class: {
        container: [
          'border-primary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'secondary',
      class: {
        container: [
          'border-secondary'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'positive',
      class: {
        container: [
          'border-positive'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'accent',
      class: {
        container: [
          'border-accent'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'warning',
      class: {
        container: [
          'border-warning'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'negative',
      class: {
        container: [
          'border-negative'
        ]
      }
    },
    {
      variant: 'outlined',
      color: 'surface',
      class: {
        container: [
          'border-outlined'
        ]
      }
    },
    // ghost & color (container)
    {
      variant: 'ghost',
      color: 'primary',
      class: {
        container: [
          'bg-primary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'secondary',
      class: {
        container: [
          'bg-secondary-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'positive',
      class: {
        container: [
          'bg-positive-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'accent',
      class: {
        container: [
          'bg-accent-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'warning',
      class: {
        container: [
          'bg-warning-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'negative',
      class: {
        container: [
          'bg-negative-container'
        ]
      }
    },
    {
      variant: 'ghost',
      color: 'surface',
      class: {
        container: [
          'bg-surface-container-highest/[.5]'
        ]
      }
    },
    // gradient & color (container)
    {
      variant: 'gradient',
      color: 'primary',
      class: {
        container: [
          'from-primary-gradient-start',
          'to-primary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'secondary',
      class: {
        container: [
          'from-secondary-gradient-start',
          'to-secondary-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'positive',
      class: {
        container: [
          'from-positive-gradient-start',
          'to-positive-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'accent',
      class: {
        container: [
          'from-accent-gradient-start',
          'to-accent-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'warning',
      class: {
        container: [
          'from-warning-gradient-start',
          'to-warning-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'negative',
      class: {
        container: [
          'from-negative-gradient-start',
          'to-negative-gradient-end'
        ]
      }
    },
    {
      variant: 'gradient',
      color: 'surface',
      class: {
        container: [
          'from-surface-container',
          'to-surface-container-highest'
        ]
      }
    },
    // filled & gradient (title,p, icons)
    {
      variant: ['filled', 'gradient'],
      color: 'primary',
      class: {
        container: [
          'text-on-primary'
        ],
        closeIcon: [
          'text-on-primary'
        ]
      }
    },
    {
      variant: ['filled', 'gradient'],
      color: 'secondary',
      class: {
        container: [
          'text-on-secondary'
        ],
        closeIcon: [
          'text-on-secondary'
        ]
      }
    },
    {
      variant: ['filled', 'gradient'],
      color: 'positive',
      class: {
        container: [
          'text-on-positive'
        ],
        closeIcon: [
          'text-on-positive'
        ]
      }
    },
    {
      variant: ['filled', 'gradient'],
      color: 'accent',
      class: {
        container: [
          'text-on-accent'
        ],
        closeIcon: [
          'text-on-accent'
        ]
      }
    },
    {
      variant: ['filled', 'gradient'],
      color: 'warning',
      class: {
        container: [
          'text-on-warning'
        ],
        closeIcon: [
          'text-on-warning'
        ]
      }
    },
    {
      variant: ['filled', 'gradient'],
      color: 'negative',
      class: {
        container: [
          'text-on-negative'
        ],
        closeIcon: [
          'text-on-negative'
        ]
      }
    },
    {
      variant: ['filled', 'gradient'],
      color: 'surface',
      class: {
        container: [
          'text-on-surface'
        ],
        closeIcon: [
          'text-on-surface'
        ]
      }
    },
    // ghost & outlined & color (title, p, icons)
    {
      variant: ['ghost', 'outlined'],
      color: 'primary',
      class: {
        container: [
          'text-on-primary-container'
        ],
        closeIcon: [
          'text-on-primary-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'secondary',
      class: {
        container: [
          'text-on-secondary-container'
        ],
        closeIcon: [
          'text-on-secondary-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'positive',
      class: {
        container: [
          'text-on-positive-container'
        ],
        closeIcon: [
          'text-on-positive-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'accent',
      class: {
        container: [
          'text-on-accent-container'
        ],
        closeIcon: [
          'text-on-accent-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'warning',
      class: {
        container: [
          'text-on-warning-container'
        ],
        closeIcon: [
          'text-on-warning-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'negative',
      class: {
        container: [
          'text-on-negative-container'
        ],
        closeIcon: [
          'text-on-negative-container'
        ]
      }
    },
    {
      variant: ['ghost', 'outlined'],
      color: 'surface',
      class: {
        container: [
          'text-on-surface-variant'
        ],
        closeIcon: [
          'text-on-surface-variant'
        ]
      }
    }
  ]
}) as unknown as ReturnType<TV>
